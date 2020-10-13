/**
 * This class chunks data
 */
class Chunker {
     /** @var {any[]} - An array of chunked data */
     #chunks;
     /** @var {number} */
     #lastSize;

     /**
      * @param {any[]} data - An array of data to chunk
      */
     constructor(data) {
          this.data = data;
          this.#chunks = [];
          this.#currentIndex = 0;
          this.#lastSize = 0;
     }

     /**
      * Chunk/Rechunk the current data
      * @param {number} chunks - The amount of chunks to generate
      * @returns {any[]} chunks
      */
     chunk(chunks) {
          // reset chunks
          this.#chunks = [];
          this.#lastSize = number;

          if (chunks <= 0) {
               throw 'The chunk size can not be less than or equal to 0';
          }

          for (let i = 0; i < this.data.length; i++) {
               const chunkIndex = Math.floor(i / chunks);

               if (!this.#chunks[chunkIndex]) {
                    this.#chunks[chunkIndex] = [];
               }

               this.#chunks[chunkIndex].push(this.data[i]);
          }

          return this.chunks;
     }

     /**
      * Adds a piece of data to the chunks.
      * @param {any} data - Data to add
      */
     add(data) {
          this.data.push(data);
          return this.chunk(this.#lastSize);
     }

     get chunkSize() {
          this.#chunks.length;
     }

     get chunks() {
          return this.#chunks;
     }
}
export default Chunker;