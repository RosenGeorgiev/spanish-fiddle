class word_randomizer {
    constructor(root_element, word_map) {
        this.root_element = root_element;
        this.word_map = word_map;
        this.curr_word = null;

        this.root_element.innerHTML = `
            <p>Translate the word:</p>
            <p id="word_placeholder"></p>
            <input type="text" class="form-control" id="translation_input">

            <button type="button" class="btn btn-success" id="submit_btn">Submit</button>
            <button type="button" class="btn btn-success" id="another_btn">Another word</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Mistake</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        Correct translation for <span id="untranslated_word"></span> is <span id="translated_word"></span>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {});
        this._update_translation_word();

        document.getElementById('submit_btn').onclick = () => {
            const translated_word = document.getElementById('translation_input').value;

            if (translated_word !== this.word_map[this.curr_word]) {
                document.getElementById('untranslated_word').textContent = this.curr_word;
                document.getElementById('translated_word').textContent = this.word_map[this.curr_word];

                this.myModal.show();
            }

            this._update_translation_word();
        };

        document.getElementById('another_btn').onclick = () => {
            this._update_translation_word();
        };
    }

    _update_translation_word = () => {
        const obj_keys = Object.keys(this.word_map);
        this.curr_word = obj_keys[Math.floor(Math.random() * obj_keys.length)];

        document.getElementById('word_placeholder').textContent = this.curr_word;
        document.getElementById('translation_input').value = '';
    }
}
