import { Client } from 'pg';
export abstract class BaseRepository {
    protected _context: Client;
    protected closeConnection(): void {
        this._context.end()
    }
}
