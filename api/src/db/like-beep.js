import { queryNormalized } from "./connection-pool.js";

export async function likeBeep(userId, beepId) {
  await queryNormalized(
    `
        INSERT INTO liked (liker_id,beep_id) VALUES ($1, $2)
    `,
    [userId, beepId]
  );

  await queryNormalized(
    `
        UPDATE beep
        SET like_count = like_count + 1
        WHERE id= $1
    `,
    [beepId]
  );
}