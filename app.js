class app {
    constructor() {
    }

    _add_handlers = () => {
        const main_menu_element = document.getElementById('main_menu');
        const unidad_element = document.getElementById('unidad_page');

        let current_widget = null;

        document.getElementById('main_menu_btn').onclick = () => {
            main_menu_element.removeAttribute('hidden');
            unidad_element.setAttribute('hidden', '');
        };
        document.getElementById('unidad_1_btn').onclick = () => {
            main_menu_element.setAttribute('hidden', '');
            unidad_element.removeAttribute('hidden');

            new word_randomizer(unidad_element, words['unidad_1']);
        };
        document.getElementById('word_table_btn').onclick = () => {
            main_menu_element.setAttribute('hidden', '');
            unidad_element.removeAttribute('hidden');

            current_widget = new word_table(unidad_element);
        };
    };

    run = () => {
        this._add_handlers();
    }
}
