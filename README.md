Pliki:
* hints.js - Zawiera skrócone, podstawowe informacje o JavaScriptcie
* index.html - Templatka HTML, która może zostać wykorzystana do wykonania ćwiczenia. Załączone są podstawowe CSS bootstrapa, ale bez dodatkowych bibliotek (jQuery).
* main.js - główny plik z JavaScriptem, który jest zawarty w templatce HTML. Do uzupełnienia.

Do zrobienia:
* 1) Pobranie listy walut - opis endpointu: https://api.coinpaprika.com/#tag/Coins/paths/~1coins/get
* 2) API zwraca listę obiektów reprezentujących kryptowaluty o których można pobrać dodatkowe informacje.
* 3) Wyświetlić pierwszych dziesięć elementów tej listy na stronie, z nazwą kryptowaluty i z przyciskiem do pobierania szczegółów danej kryptowaluty.
* 4) Pobranie szczegółów kryptowalut - opis endpointu: https://api.coinpaprika.com/#operation/getCoinById
* 5) Wyświetlić szczegóły kryptowaluty - pokazać opis, datę w którym kryptowaluta została stworzona, link do strony, twórców kryptowaluty.

API posiada ograniczenie na 10 żądań na sekundę.
Do komunikacji z zewnętrznym API można wykorzystać fetch API JavaScriptu (https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) lub XMLHttpRequest (https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).
Do stworzenia elementów HTML można wykorzystać funkcję document.createElement().