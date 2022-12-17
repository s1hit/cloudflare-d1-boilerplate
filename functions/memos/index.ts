import { Env } from './types';

// Select items
export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  const db = env.DB;
  const { results } = await db.prepare('SELECT * FROM Memos ORDER BY id DESC').all();
  return Response.json(results);
};

// Insert item
export const onRequestPost: PagesFunction<Env> = async ({ env, request }) => {
  const db = env.DB;
  const content = await request.clone().text();
  const info = await db.prepare('INSERT INTO Memos (content) VALUES(?)').bind(content).run();
  return Response.json(info);
};
