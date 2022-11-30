import { queryNormalized } from "./connection-pool.js";

export async function unlikeBeep(userId, beepId) {
  await queryNormalized(
    `
        DELETE FROM liked WHERE liker_id = $1 AND beep_id = $2
    `,
    [userId, beepId]
  );

  await queryNormalized(
    `
        UPDATE beep
        SET like_count = like_count - 1
        WHERE id= $1
    `,
    [beepId]
  );
}