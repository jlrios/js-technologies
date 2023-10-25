let movies

export default class MoviesDAO {
    static async injectDB(conn) {
        if (movies) {
            return
        }

        try {
            movies = await conn.db(process.env.MOVIESREVIEWS_NS).collection('movies')
        } catch(error) {
            console.error(`Unable to connect in MoviesDAO: ${error}`)
        }
    }
}