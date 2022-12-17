import { Env } from './types';

// Delete item
export const onRequestDelete: PagesFunction<Env> = async ({ env, params }) => {
  const db = env.DB;
  const id: string = params.id.toString();
  const info = await db.prepare('DELETE FROM Memos WHERE id = ?').bind(id).run();
  return Response.json(info);
};

// Update item
export const onRequestPut: PagesFunction<Env> = async ({ env, params, request }) => {
  const db = env.DB;
  const id: string = params.id.toString();
  const content = await request.clone().text();
  const info = await db
    .prepare('UPDATE Memos SET content = ? WHERE id = ?')
    .bind(content, id)
    .run();
  return Response.json(info);
};
