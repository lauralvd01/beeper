import { queryNormalized } from "./connection-pool.js";

export async function insertBeep(userId, content) {
  const inserted = await queryNormalized(
    `
        INSERT INTO beep (author_id, content) VALUES ($1, $2)
    `,
    [userId, content]
  );

  return inserted[0];
}