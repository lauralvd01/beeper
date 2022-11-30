import { likeBeep } from "../db/like-beep.js";

export async function like(userId,beepId) {
    await likeBeep(userId,beepId);
}