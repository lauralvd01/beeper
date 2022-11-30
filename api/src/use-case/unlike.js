import { unlikeBeep } from "../db/unlike-beep.js";

export async function unlike(userId,beepId) {
    await unlikeBeep(userId,beepId);
}