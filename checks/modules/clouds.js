// checks/statusApis.js
import fetch from "node-fetch";

/**
 * Cloudflare Status API をチェック
 * @returns {Promise<{ ok: boolean, statusCode: number, data?: any, error?: string }>}
 */
export async function checkCloudflareStatus() {
  const url = "https://www.cloudflarestatus.com/api/v2/status.json";
  try {
    const res = await fetch(url, { headers: { "User-Agent": "MonitorBot/1.0" } });
    const data = await res.json();
    return { ok: res.ok, statusCode: res.status, data };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

/**
 * GitHub Pages (GitHub Status API) をチェック
 * @returns {Promise<{ ok: boolean, statusCode: number, data?: any, error?: string }>}
 */
export async function checkGithubPagesStatus() {
  const url = "https://www.githubstatus.com/api/v2/status.json";
  try {
    const res = await fetch(url, { headers: { "User-Agent": "MonitorBot/1.0" } });
    const data = await res.json();
    return { ok: res.ok, statusCode: res.status, data };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

/**
 * GCP Status API をチェック
 * @returns {Promise<{ ok: boolean, statusCode: number, data?: any, error?: string }>}
 */
export async function checkGCPStatus() {
  const url = "https://status.cloud.google.com/incidents.json"; // JSON フィード
  try {
    const res = await fetch(url, { headers: { "User-Agent": "MonitorBot/1.0" } });
    const data = await res.json();
    return { ok: res.ok, statusCode: res.status, data };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}
