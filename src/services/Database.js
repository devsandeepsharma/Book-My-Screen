import { getDatabase, ref, push, set, get, update, remove } from "firebase/database";

import { app } from "./config";

class Database {
    constructor(path) {
        this.db = getDatabase(app);
        this.path = path;
    }

    create(data) {
        const dbRef = ref(this.db, this.path);
        return push(dbRef, { ...data, createdAt: Date.now() });
    }

    fetchAll() {
        const dbRef = ref(this.db, this.path);
        return get(dbRef).then(snapshot => {
            const data = snapshot.val();
            if (!data) return [];
            return Object.entries(data).map(([id, value]) => ({
                id,
                ...value
            }));
        });
    }
}

export const CategoryService = new Database("categories");
export const MovieService = new Database("movies");
export const TicketService = new Database("tickets");