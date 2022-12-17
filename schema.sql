DROP TABLE IF EXISTS Memos;
CREATE TABLE Memos (id integer primary key autoincrement, content TEXT);
INSERT INTO Memos (content) Values('test1'), ('test2'), ('test3');