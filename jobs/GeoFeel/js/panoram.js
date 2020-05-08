ymaps.ready(function() {
    // Для начала проверим, поддерживает ли плеер браузер пользователя.
    if (!ymaps.panorama.isSupported()) {
        // Если нет, то просто ничего не будем делать.
        return;
    }
    const place = {
        init() {
            // Берем данные о местах с панорамами из json файла,
            // потому что сделать функцию, генерирующую совершенно
            // случайные координаты с панорамами нет возможности
            var country = localStorage.country
            return fetch("https://serchsoff.github.io/" +country+ ".json")
            .then(response => response.json())
            .then(obj => obj.places[Math.round(Math.random() * obj.places.length)]);
        },
        
        makeNewPanorama() {
            const self = this;
            this.init().then(function(coords) {
                // Теперь часть стандартного алгоритма для создания панорамы
                var locateRequest = ymaps.panorama.locate(coords);
                locateRequest.then(
                    function (panoramas) {
                        if (panoramas.length) {
                            const panoram = new ymaps.panorama.Player(
                                'panoram',
                                panoramas[0],
                                { direction: [256, 16],
                                suppressMapOpenBlock: true,
                                suppressObsoleteBrowserNotifier: true,
                                controls: []}
                            );
                            // Убрать показ улицы по нажатию на маркер
                            panoram.events.add('markerexpand', e => e.preventDefault());

                            var toStart = document.querySelector(".toStart")
                            toStart.onclick = () => {
                            	panoram.moveTo(coords)
                            }

                            localStorage.setItem('from1',coords[0])
                            localStorage.setItem('from2',coords[1])
                            return 'done';
                        } else {
                            // Если панорама не найдена - ищем дальше
                            self.makeNewPanorama();  
                        }
                    },
                    function (err) {
                        // В случае ошибки так же продолжаем искать новую панораму
                        // console.error(err);
                        self.makeNewPanorama();  
                    }
                );
            })
        }
    }
    place.makeNewPanorama();
});