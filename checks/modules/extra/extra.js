const PROVIDERS = {
    cloudflare: async () => import("./cloudflare.js"),
    aws: async () => import("./aws.js"),
    gcp: async () => import("./gcp.js"),
    github: async () => import("./github.js"),
    render: async () => import("./render.js"),
};

export async function getServiceStatus({ provider, service }) {
    try {
        const loader = PROVIDERS[provider];
        if (!loader) {
            throw new Error(`Unsupported provider: ${provider}`);
        }

        const mod = await loader();

        // 各 provider は getStatus(service) を export する想定
        if (typeof mod.getStatus !== "function") {
            throw new Error(`Provider ${provider} has no getStatus()`);
        }

        const raw = await mod.getStatus(service);

        return {
            ok: true,
            provider,
            status: raw,
        };

    } catch (e) {
        return {
            ok: false,
            provider,
            status: "unknown",
            error: e.message,
        };
    }
}
