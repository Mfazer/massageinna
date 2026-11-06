function assetUrl(path) { return window.__INNA_ASSETS?.[path] || path; }


const massageServices = [
  {
    id: 'relax', cat: 'relax', filters: ['relax'], tag: 'RELAX', image: 'assets/relax-massage.webp',
    name: { pl: 'Masaż relaksacyjny', ru: 'Расслабляющий массаж' },
    short: { pl: 'Spokojna sesja, która pomaga zwolnić i odpuścić napięcie.', ru: 'Спокойная сессия, чтобы замедлиться и отпустить напряжение.' },
    description: { pl: 'Uważny masaż oparty na miękkim dotyku, płynnych ruchach i świadomej pracy z oddechem. Siłę i tempo dobieram do samopoczucia oraz tego, czego potrzebujesz w danym dniu.', ru: 'Внимательный массаж с мягкими прикосновениями, плавными движениями и осознанной работой с дыханием. Интенсивность и темп подбираю под самочувствие и то, что вам нужно сегодня.' },
    forWho: { pl: ['przy przemęczeniu i dużej ilości stresu', 'gdy trudno się wyciszyć i odpocząć', 'przy napięciu w karku, barkach i plecach', 'gdy potrzebujesz spokojnego czasu dla siebie'], ru: ['при усталости и высоком уровне стресса', 'когда сложно расслабиться и отдохнуть', 'при напряжении в шее, плечах и спине', 'когда нужно спокойное время для себя'] },
    method: { pl: 'Pracuję spokojnie, bez gwałtownych ruchów. Sesja może obejmować całe ciało lub wybrane obszary. W razie potrzeby włączam spokojną pracę z oddechem i aromaterapię.', ru: 'Работаю спокойно, без резких движений. Сессия может охватывать всё тело или отдельные зоны. При необходимости добавляю спокойную работу с дыханием и ароматерапию.' },
    recommendation: { pl: '60 minut to dobry początek. Jeśli chcesz objąć sesją całe ciało i nie spieszyć się, wybierz 90 minut. Po masażu warto zostawić sobie trochę wolnego czasu.', ru: '60 минут, хороший вариант для начала. Если хотите проработать всё тело без спешки, выбирайте 90 минут. После массажа желательно оставить немного свободного времени для отдыха.' },
    note: { pl: 'Jeśli jesteś w trakcie leczenia, masz świeży uraz lub nie masz pewności, czy masaż jest dla Ciebie odpowiedni, powiedz o tym przed sesją.', ru: 'Если вы проходите лечение, недавно получили травму или не уверены, подходит ли вам массаж, сообщите об этом до сеанса.' },
    variants: [{ duration: '60 min', price: 180 }, { duration: '90 min', price: 250 }], verified: true
  },
  {
    id: 'candle', cat: 'warm', filters: ['relax'], tag: 'WARM OIL', image: 'assets/massage-candle.webp',
    name: { pl: 'Masaż gorącą świecą', ru: 'Массаж горячей свечой' },
    short: { pl: 'Ciepły olej, płynne ruchy i aromat, który dopełnia relaks.', ru: 'Тёплое масло, плавные движения и аромат, дополняющий расслабление.' },
    description: { pl: 'Masaż inspirowany technikami balijskimi. Wykorzystuję ciepły olej ze specjalnej świecy do masażu, który otula skórę i pozwala pracować spokojnie, płynnie i bez pośpiechu.', ru: 'Массаж, вдохновлённый балийскими техниками. Используется тёплое масло из специальной массажной свечи: оно покрывает кожу, а плавные движения помогают расслабиться без спешки.' },
    forWho: { pl: ['gdy marzysz o cieple i spokojnym odpoczynku', 'przy napięciu i zmęczeniu', 'gdy lubisz masaż z aromatycznym olejem', 'dla osób, które wolą łagodniejszy rytm sesji'], ru: ['когда хочется тепла и спокойного отдыха', 'при напряжении и усталости', 'если нравится массаж с ароматическим маслом', 'для тех, кто предпочитает мягкий темп'] },
    method: { pl: 'Łączę płynne ruchy, elementy masażu balijskiego i pracę z napięciem mięśniowym. Przed rozpoczęciem sprawdzamy temperaturę oleju i dobieramy zapach.', ru: 'Сочетаю плавные движения, элементы балийского массажа и работу с мышечным напряжением. Перед началом согласуем температуру масла и аромат.' },
    recommendation: { pl: 'Wariant 90 minut pozwala spokojniej objąć masażem większy obszar ciała.', ru: 'Вариант на 90 минут позволяет без спешки уделить внимание большей части тела.' },
    note: { pl: 'Przed sesją poinformuj mnie o alergiach, nadwrażliwości skóry lub niechęci do zapachów. Temperaturę oleju zawsze ustalamy przed masażem.', ru: 'До сеанса сообщите об аллергиях, чувствительности кожи или непереносимости ароматов. Температуру масла всегда согласуем заранее.' },
    variants: [{ duration: '60 min', price: 180 }, { duration: '90 min', price: 250 }], verified: true
  },
  {
    id: 'bali', cat: 'relax', filters: ['relax', 'tension'], tag: 'BALINESE', image: 'assets/spa-detail.webp',
    name: { pl: 'Masaż balijski', ru: 'Балийский массаж' },
    short: { pl: 'Płynne ruchy i głębsza praca z ciałem w spokojnym rytmie.', ru: 'Плавные движения и более глубокая работа с телом в спокойном ритме.' },
    description: { pl: 'Masaż łączący długie, płynne ruchy, ucisk i bardziej zdecydowaną pracę z mięśniami. Intensywność dopasowuję do Twojej tolerancji dotyku i aktualnego napięcia.', ru: 'Массаж сочетает длинные плавные движения, надавливания и более глубокую работу с мышцами. Интенсивность подбираю с учётом ваших ощущений и текущего напряжения.' },
    forWho: { pl: ['przy zmęczeniu i przeciążeniu', 'gdy potrzebujesz zarówno relaksu, jak i mocniejszego dotyku', 'przy napięciu pleców, barków i nóg', 'dla osób, które lubią dłuższą, płynną pracę z ciałem'], ru: ['при усталости и перегрузке', 'если хочется и расслабления, и более интенсивного воздействия', 'при напряжении спины, плеч и ног', 'для тех, кому подходит длительная плавная работа с телом'] },
    method: { pl: 'W zależności od potrzeb łączę techniki głaskania, rozcierania, ucisku i pracy na większych grupach mięśniowych.', ru: 'В зависимости от потребностей сочетаю поглаживания, растирания, надавливания и работу с крупными мышечными группами.' },
    recommendation: { pl: '90 minut daje więcej czasu na spokojną pracę z całym ciałem. 60 minut sprawdzi się, jeśli chcesz skupić się na wybranych obszarach.', ru: '90 минут дают больше времени для спокойной работы со всем телом. 60 минут подойдут, если нужно сосредоточиться на отдельных зонах.' },
    note: { pl: 'Masaż może być intensywniejszy niż typowy masaż relaksacyjny. Zawsze możesz poprosić o zmianę nacisku.', ru: 'Массаж может быть интенсивнее обычного расслабляющего. Вы всегда можете попросить изменить силу надавливания.' },
    variants: [{ duration: '60 min', price: 240 }, { duration: '90 min', price: 340 }], verified: true
  },
  {
    id: 'thai-mix', cat: 'thai', filters: ['tension', 'thai'], tag: 'THAI MIX', image: 'assets/massage-table.webp',
    name: { pl: 'Masaż Thai Mix', ru: 'Массаж Thai Mix' },
    short: { pl: 'Połączenie technik tajskich i balijskich, pracy mięśniowej i rozciągania.', ru: 'Сочетание тайских и балийских техник, работы с мышцами и растяжки.' },
    description: { pl: 'Sesja inspirowana masażem tajskim i balijskim. Łączy głębszą pracę z ciałem, elementy rozciągania oraz świadomy dotyk. Tempo i zakres ruchu dostosowuję do Twojej mobilności.', ru: 'Сессия, вдохновлённая тайским и балийским массажем. Сочетает более глубокую работу с телом, элементы растяжки и осознанные прикосновения. Темп и амплитуду подбираю с учётом вашей подвижности.' },
    forWho: { pl: ['przy sztywności i uczuciu ograniczenia ruchu', 'przy napięciu w plecach, biodrach i barkach', 'dla osób aktywnych i pracujących siedząco', 'gdy potrzebujesz rozluźnienia połączonego z mobilizacją'], ru: ['при скованности и ограничении подвижности', 'при напряжении в спине, бёдрах и плечах', 'для активных людей и тех, кто много сидит', 'когда нужно совместить расслабление и развитие подвижности'] },
    method: { pl: 'W sesji mogą pojawić się elementy pasywnego rozciągania, stabilny ucisk i płynne przejścia między pozycjami. Nie wymuszam zakresu ruchu.', ru: 'В сеансе могут использоваться элементы пассивной растяжки, устойчивые надавливания и плавные переходы между положениями. Амплитуда не форсируется.' },
    recommendation: { pl: '90 minut pozwala przeznaczyć więcej czasu na poszczególne partie ciała i spokojne przejścia między technikami.', ru: '90 минут позволяют уделить больше времени отдельным зонам и спокойно переходить между техниками.' },
    note: { pl: 'Przed sesją powiedz o ograniczeniach ruchu, świeżych urazach lub dolegliwościach, które wymagają ostrożności.', ru: 'До сеанса сообщите об ограничениях подвижности, недавних травмах и состояниях, требующих осторожности.' },
    variants: [{ duration: '60 min', price: 248 }, { duration: '90 min', price: 320 }, { duration: '120 min', price: 420 }], verified: true
  },
  {
    id: 'classic', cat: 'tension', filters: ['relax', 'tension'], tag: 'CLASSIC', image: 'assets/massage-table.webp',
    name: { pl: 'Masaż klasyczny', ru: 'Классический массаж' },
    short: { pl: 'Klasyczne techniki dopasowane do wybranych partii lub całego ciała.', ru: 'Классические техники для отдельных зон или всего тела.' },
    description: { pl: 'Masaż oparty na klasycznych technikach: głaskaniu, rozcieraniu, ugniataniu i ucisku. Zakres sesji ustalamy wspólnie, może obejmować plecy, kark, barki, nogi lub całe ciało.', ru: 'Массаж на основе классических техник: поглаживания, растирания, разминания и надавливания. Объём сеанса согласуем вместе: спина, шея, плечи, ноги или всё тело.' },
    forWho: { pl: ['przy napięciu mięśniowym i zmęczeniu', 'po długim siedzeniu lub wysiłku fizycznym', 'gdy chcesz skupić się na konkretnej partii ciała', 'jeśli szukasz uniwersalnej formy masażu'], ru: ['при мышечном напряжении и усталости', 'после долгого сидения или физической нагрузки', 'если нужно уделить внимание конкретной зоне', 'если вы ищете универсальный вид массажа'] },
    method: { pl: 'Techniki i siłę nacisku dopasowuję do wybranego obszaru i Twoich odczuć. Przed rozpoczęciem ustalamy, czy pracujemy na całym ciele, czy na wybranych partiach.', ru: 'Техники и силу воздействия подбираю под выбранную зону и ваши ощущения. Перед началом решаем, работаем со всем телом или отдельными участками.' },
    recommendation: { pl: '60 minut sprawdzi się przy wybranych partiach. Jeśli planujesz masaż całego ciała, rozważ 90 minut.', ru: '60 минут подойдут для отдельных зон. Если планируете массаж всего тела, рассмотрите вариант на 90 минут.' },
    note: { pl: 'Przed sesją warto poinformować o bólu, urazach lub zaleceniach lekarza dotyczących masażu.', ru: 'Перед сеансом сообщите о боли, травмах или рекомендациях врача относительно массажа.' },
    variants: [{ label: 'Wybrana partia ciała', duration: '30 min', price: 170 }, { label: 'Tył ciała', duration: '45 min', price: 210 }, { label: 'Całe ciało', duration: '60 min', price: 240 }, { label: 'Plecy, kark, ręce i dłonie', duration: '60 min', price: 240 }, { label: 'Całe ciało i twarz', duration: '75 min', price: 300 }, { label: 'Plecy, kark, ręce, dłonie i twarz', duration: '75 min', price: 300 }, { label: 'Masaż całego ciała', duration: '90 min', price: 320 }], verified: true
  },
  {
    id: 'buccal', cat: 'face', filters: ['face'], tag: 'FACE WORK', image: 'assets/buccal-massage.webp',
    name: { pl: 'Masaż transbukalny, naturalny lifting', ru: 'Трансбуккальный массаж, Natural Lifting' },
    short: { pl: 'Zewnętrzna i wewnętrzna praca z mięśniami twarzy.', ru: 'Внешняя и внутренняя проработка мышц лица.' },
    description: { pl: 'Specjalistyczna technika masażu twarzy, która łączy pracę zewnętrzną z delikatną pracą od strony jamy ustnej w rękawiczkach. Skupia się na mięśniach policzków, okolicy ust i żuchwy.', ru: 'Специальная техника массажа лица, которая сочетает внешнюю работу с аккуратной проработкой мышц со стороны ротовой полости в перчатках. Основное внимание, щёкам, области вокруг рта и челюсти.' },
    forWho: { pl: ['przy napięciu mięśni twarzy i żuchwy', 'przy nawykowym zaciskaniu szczęki', 'gdy chcesz zadbać o owal i mięśnie twarzy', 'dla osób szukających intensywniejszej manualnej pracy z twarzą'], ru: ['при напряжении мышц лица и челюсти', 'при привычке сжимать зубы', 'если хочется уделить внимание овалу лица и мимическим мышцам', 'для тех, кто ищет более интенсивную ручную работу с лицом'] },
    method: { pl: 'Sesja obejmuje masaż zewnętrzny oraz, jeśli nie ma przeciwwskazań i wyrażasz zgodę, pracę transbukalną od wewnętrznej strony policzków.', ru: 'Сеанс включает внешний массаж и, при отсутствии противопоказаний и с вашего согласия, трансбуккальную работу со стороны щёк.' },
    recommendation: { pl: 'Czas i przebieg sesji ustalamy przed pierwszą wizytą. Warto poinformować o niedawnych zabiegach stomatologicznych i stanie jamy ustnej.', ru: 'Продолжительность и ход сеанса согласуем до первого визита. Важно сообщить о недавних стоматологических процедурах и состоянии полости рта.' },
    note: { pl: 'Przy aktywnych stanach zapalnych jamy ustnej, ranach, infekcjach lub świeżych zabiegach stomatologicznych zabieg należy odłożyć i wcześniej skonsultować.', ru: 'При активном воспалении полости рта, ранах, инфекциях или недавних стоматологических процедурах сеанс следует отложить и предварительно обсудить со специалистом.' },
    variants: [{ duration: '60 min', price: 208 }], verified: true
  },
  {
    id: 'kobido', cat: 'face', filters: ['face'], tag: 'JAPANESE FACE', image: 'assets/face-massage.webp',
    name: { pl: 'Masaż Kobido', ru: 'Массаж Кобидо' },
    short: { pl: 'Japońska technika manualnej pracy z twarzą i mięśniami.', ru: 'Японская техника ручной работы с лицом и мимическими мышцами.' },
    description: { pl: 'Rozbudowana technika masażu twarzy łącząca spokojne ruchy, ugniatanie, ucisk i szybsze sekwencje manualne. Praca obejmuje twarz, szyję i, zależnie od sesji, dekolt.', ru: 'Развёрнутая техника массажа лица, сочетающая спокойные движения, разминание, надавливания и более быстрые ручные приёмы. Работа может охватывать лицо, шею и зону декольте.' },
    forWho: { pl: ['gdy chcesz poświęcić czas pielęgnacji twarzy', 'przy napięciu mięśni mimicznych', 'gdy zależy Ci na pracy z okolicą żuchwy i policzków', 'dla osób lubiących intensywniejszy masaż twarzy'], ru: ['если хотите уделить время уходу за лицом', 'при напряжении мимических мышц', 'если хотите проработать область челюсти и щёк', 'для тех, кому нравится более интенсивный массаж лица'] },
    method: { pl: 'Dobieram tempo i intensywność do wrażliwości skóry. Przed sesją omawiamy oczekiwania i ewentualne przeciwwskazania.', ru: 'Темп и интенсивность подбираю с учётом чувствительности кожи. До сеанса обсуждаем ожидания и возможные ограничения.' },
    recommendation: { pl: 'Przed wizytą poinformuj o świeżych zabiegach kosmetologicznych, podrażnieniach lub aktywnych zmianach skórnych.', ru: 'До визита сообщите о недавних косметологических процедурах, раздражениях или активных изменениях кожи.' },
    note: { pl: 'To zabieg manualny, nie zastępuje konsultacji dermatologicznej ani medycyny estetycznej.', ru: 'Это ручная процедура, она не заменяет консультацию дерматолога или эстетическую медицину.' },
    variants: [{ duration: '45 min', price: 168 }, { duration: '60 min', price: 208 }], verified: true
  },
  {
    id: 'drainage', cat: 'drain', filters: ['drain'], tag: 'MANUAL DRAINAGE', image: 'assets/lymphatic-massage.webp',
    name: { pl: 'Manualny drenaż limfatyczny', ru: 'Ручной лимфодренажный массаж' },
    short: { pl: 'Delikatna, rytmiczna technika pracy z tkankami i kierunkiem przepływu limfy.', ru: 'Мягкая ритмичная техника работы с тканями и направлением лимфотока.' },
    description: { pl: 'Łagodna technika manualna oparta na powolnych, rytmicznych ruchach. Nie jest to mocny masaż, nacisk pozostaje delikatny, a przebieg sesji dobierany jest do potrzeb i stanu zdrowia.', ru: 'Мягкая ручная техника с медленными ритмичными движениями. Это не интенсивный массаж: воздействие остаётся деликатным, а формат процедуры подбирается с учётом потребностей и состояния здоровья.' },
    forWho: { pl: ['przy uczuciu ciężkości i obrzękowości', 'gdy potrzebujesz delikatnej pracy z ciałem', 'po długim okresie siedzenia, po wcześniejszej ocenie, czy zabieg jest odpowiedni', 'dla osób, które nie tolerują mocnego masażu'], ru: ['при ощущении тяжести и отёчности', 'когда нужна деликатная работа с телом', 'после длительного сидения, предварительно оценив, подходит ли процедура', 'для тех, кто плохо переносит интенсивный массаж'] },
    method: { pl: 'Pracuję delikatnie i bez pośpiechu. Zakres, obszar i możliwość wykonania drenażu ustalamy przed sesją.', ru: 'Работаю мягко и без спешки. Область, объём и возможность проведения дренажа определяем до сеанса.' },
    recommendation: { pl: 'Przed rezerwacją koniecznie poinformuj o chorobach przewlekłych, problemach naczyniowych, przebytych operacjach, ciąży lub zaleceniach lekarskich.', ru: 'Перед записью обязательно сообщите о хронических заболеваниях, сосудистых проблемах, перенесённых операциях, беременности или рекомендациях врача.' },
    note: { pl: 'Drenaż nie jest odpowiedni w każdej sytuacji. Przy obrzękach o nieustalonej przyczynie lub chorobach układu krążenia najpierw skonsultuj się z lekarzem.', ru: 'Лимфодренаж подходит не во всех случаях. При отёках неизвестной причины или заболеваниях системы кровообращения сначала проконсультируйтесь с врачом.' },
    variants: [{ duration: '30 min', price: 165 }, { duration: '45 min', price: 210 }, { duration: '60 min', price: 240 }], verified: true
  },
  {
    id: 'lymphatic', cat: 'drain', filters: ['drain'], tag: 'LYMPHATIC DRAINAGE', image: 'assets/lymphatic-massage.webp',
    name: { pl: 'Masaż limfatyczny', ru: 'Лимфодренажный массаж' },
    short: { pl: 'Delikatna praca z obrzękowością i uczuciem ciężkości.', ru: 'Мягкая работа с отёчностью и ощущением тяжести.' },
    description: { pl: 'Masaż o spokojnym, rytmicznym charakterze, ukierunkowany na wsparcie naturalnego przepływu limfy. Nacisk jest delikatny, a obszar pracy dobierany do potrzeb i stanu zdrowia.', ru: 'Массаж в спокойном ритме, направленный на поддержку естественного лимфотока. Воздействие мягкое, а область работы подбирается с учётом потребностей и состояния здоровья.' },
    forWho: { pl: ['przy uczuciu ciężkości i obrzękowości', 'gdy potrzebujesz łagodnej pracy z ciałem', 'po długim siedzeniu lub podróży, jeśli nie ma przeciwwskazań', 'dla osób, które nie tolerują mocnego ucisku'], ru: ['при ощущении тяжести и отёчности', 'когда нужна мягкая работа с телом', 'после долгого сидения или поездки при отсутствии противопоказаний', 'для тех, кто плохо переносит сильное давление'] },
    method: { pl: 'Sesja obejmuje powolne, rytmiczne ruchy wykonywane w określonym kierunku. To technika delikatna, nie należy jej mylić z intensywnym masażem tkanek głębokich.', ru: 'Сеанс включает медленные ритмичные движения в определённом направлении. Это мягкая техника, её не следует путать с интенсивным глубокотканным массажем.' },
    recommendation: { pl: 'Wariant 60 minut jest dobrym punktem wyjścia. Dłuższy wariant pozwala spokojniej objąć większy obszar. Przy obrzękach o nieustalonej przyczynie najpierw skonsultuj się z lekarzem.', ru: '60 минут - хороший вариант для начала. Более длительный сеанс позволяет спокойно уделить внимание большей области. При отёках неизвестной причины сначала проконсультируйтесь с врачом.' },
    note: { pl: 'Przed wizytą poinformuj o chorobach układu krążenia, zakrzepicy, infekcjach, gorączce, ciąży, przebytych operacjach i zaleceniach lekarza. Drenaż nie jest odpowiedni w każdej sytuacji.', ru: 'До визита сообщите о заболеваниях системы кровообращения, тромбозе, инфекциях, повышенной температуре, беременности, перенесённых операциях и рекомендациях врача. Лимфодренаж подходит не во всех ситуациях.' },
    variants: [{ duration: '60 min', price: 176 }, { duration: '90 min', price: 224 }], verified: true
  },
  {
    id: 'sports', cat: 'tension', filters: ['tension'], tag: 'RECOVERY', image: 'assets/bodywork.webp',
    name: { pl: 'Masaż sportowy', ru: 'Спортивный массаж' },
    short: { pl: 'Bardziej zdecydowana praca z mięśniami obciążonymi treningiem.', ru: 'Более интенсивная работа с мышцами после физических нагрузок.' },
    description: { pl: 'Masaż dla osób aktywnych fizycznie. Skupia się na partiach, które są mocno zaangażowane w treningu lub powtarzalnym wysiłku. Intensywność dobieram do obciążenia i aktualnej regeneracji.', ru: 'Массаж для физически активных людей. Внимание уделяется зонам, которые регулярно нагружаются во время тренировок или повторяющейся физической работы. Интенсивность подбирается под нагрузку и текущее восстановление.' },
    forWho: { pl: ['dla osób regularnie trenujących', 'przy uczuciu przeciążenia mięśni', 'po okresach zwiększonej aktywności', 'gdy chcesz skupić się na konkretnych partiach'], ru: ['для тех, кто регулярно тренируется', 'при ощущении мышечной перегрузки', 'после периодов повышенной активности', 'если нужно уделить внимание отдельным мышечным группам'] },
    method: { pl: 'Przed masażem ustalamy rodzaj aktywności, obciążone partie oraz to, czy potrzebujesz delikatniejszej, czy mocniejszej pracy.', ru: 'Перед массажем обсуждаем вид активности, нагруженные зоны и то, нужна ли более мягкая или интенсивная проработка.' },
    recommendation: { pl: 'Nie planuj intensywnego masażu bezpośrednio przed ważnym startem lub maksymalnym wysiłkiem. Przy świeżym urazie najpierw skonsultuj się ze specjalistą.', ru: 'Не планируйте интенсивный массаж непосредственно перед важным стартом или максимальной нагрузкой. При свежей травме сначала проконсультируйтесь со специалистом.' },
    note: { pl: 'Masaż sportowy nie zastępuje diagnostyki ani rehabilitacji po urazie.', ru: 'Спортивный массаж не заменяет диагностику и реабилитацию после травмы.' },
    variants: [{ duration: '45 min', price: 152 }, { duration: '60 min', price: 192 }, { duration: '90 min', price: 248 }], verified: true
  },
  {
    id: 'deep-tissue', cat: 'tension', filters: ['tension'], tag: 'DEEP TISSUE', image: 'assets/bodywork.webp',
    name: { pl: 'Masaż tkanek głębokich i terapia punktów spustowych', ru: 'Глубокотканный массаж и работа с триггерными точками' },
    short: { pl: 'Powolna, precyzyjna praca z głębiej położonymi warstwami mięśni.', ru: 'Медленная точная работа с более глубокими слоями мышц.' },
    description: { pl: 'Technika wykorzystująca wolniejsze ruchy i precyzyjny nacisk w wybranych obszarach. Może obejmować pracę z punktami spustowymi, czyli miejscami szczególnej wrażliwości i napięcia.', ru: 'Техника с медленными движениями и точечным воздействием на выбранные участки. Может включать работу с триггерными точками, зонами повышенной чувствительности и напряжения.' },
    forWho: { pl: ['przy długotrwałym napięciu mięśni', 'przy przeciążeniu karku, barków, pleców lub bioder', 'dla osób, które dobrze tolerują mocniejszy ucisk', 'gdy delikatny masaż nie odpowiada Twoim potrzebom'], ru: ['при длительном мышечном напряжении', 'при перегрузке шеи, плеч, спины или бёдер', 'для тех, кто хорошо переносит более сильное давление', 'если мягкого массажа недостаточно по ощущениям'] },
    method: { pl: 'Pracuję etapami, dostosowując nacisk do reakcji tkanek i Twojego komfortu. Ból nie jest celem zabiegu, możesz w każdej chwili poprosić o zmianę siły.', ru: 'Работаю постепенно, подбирая давление по реакции тканей и вашему комфорту. Боль не является целью процедуры, в любой момент можно попросить изменить интенсивность.' },
    recommendation: { pl: 'Przed sesją wskaż konkretne obszary i opowiedz o urazach lub dolegliwościach. Przy ostrym bólu niewiadomego pochodzenia najpierw potrzebna jest konsultacja medyczna.', ru: 'Перед сеансом укажите конкретные зоны и расскажите о травмах или жалобах. При острой боли неизвестного происхождения сначала нужна медицинская консультация.' },
    note: { pl: 'Nie wykonuję intensywnej pracy na obszarze świeżego urazu, stanu zapalnego ani uszkodzenia skóry.', ru: 'Интенсивная работа не проводится по области свежей травмы, воспаления или повреждения кожи.' },
    variants: [{ duration: '30 min', price: 112 }, { duration: '45 min', price: 144 }, { duration: '60 min', price: 200 }, { duration: '90 min', price: 256 }, { duration: '120 min', price: 320 }], verified: true
  },
  {
    id: 'therapeutic', cat: 'tension', filters: ['tension'], tag: 'TARGETED WORK', image: 'assets/bodywork.webp',
    name: { pl: 'Masaż terapeutyczny', ru: 'Терапевтический массаж' },
    short: { pl: 'Indywidualna praca z obszarami, w których odczuwasz napięcie.', ru: 'Индивидуальная работа с участками, в которых ощущается напряжение.' },
    description: { pl: 'Sesja skoncentrowana na wybranych partiach ciała. Przed masażem rozmawiamy o odczuciach, codziennej aktywności i obszarach, które wymagają uważniejszej pracy.', ru: 'Сеанс с акцентом на выбранные участки тела. Перед массажем обсуждаем ощущения, повседневную активность и зоны, которым требуется больше внимания.' },
    forWho: { pl: ['przy napięciu karku, pleców i barków', 'przy przeciążeniu związanym z pracą lub aktywnością', 'gdy chcesz skupić sesję na jednym obszarze', 'dla osób potrzebujących indywidualnego doboru techniki'], ru: ['при напряжении шеи, спины и плеч', 'при перегрузке из-за работы или активности', 'если нужно сосредоточить сеанс на одной зоне', 'для тех, кому нужен индивидуальный подбор техники'] },
    method: { pl: 'Dobór techniki i intensywności zależy od rozmowy przed sesją. Jeśli przyczyna bólu nie jest znana, najpierw warto skonsultować ją z lekarzem.', ru: 'Технику и интенсивность выбираем после предварительного разговора. Если причина боли неизвестна, сначала стоит обсудить её с врачом.' },
    recommendation: { pl: 'Czas i koszt ustalamy na podstawie obszaru pracy i potrzebnej długości sesji.', ru: 'Продолжительность и стоимость определяются по зоне проработки и необходимому времени.' },
    note: { pl: 'Masaż nie jest diagnozą ani leczeniem choroby. Przy ostrym bólu, drętwieniu lub świeżym urazie skonsultuj się z lekarzem.', ru: 'Массаж не является диагностикой или лечением заболевания. При острой боли, онемении или свежей травме обратитесь к врачу.' },
    variants: [{ duration: '30 min', price: 180 }, { duration: '45 min', price: 220 }, { duration: '60 min', price: 250 }], verified: true
  },
  {
    id: 'aroma', cat: 'warm', filters: ['relax'], tag: 'AROMATHERAPY', image: 'assets/massage-candle.webp',
    name: { pl: 'Masaż aromaterapeutyczny', ru: 'Ароматерапевтический массаж' },
    short: { pl: 'Masaż z olejem i zapachem dobranym do Twoich preferencji.', ru: 'Массаж с маслом и ароматом по вашим предпочтениям.' },
    description: { pl: 'Relaksacyjna praca z ciałem połączona z użyciem oleju i wybranego aromatu. To propozycja dla osób, które lubią spokojny rytm masażu i chcą połączyć dotyk z przyjemnym zapachem.', ru: 'Расслабляющая работа с телом с использованием масла и выбранного аромата. Подходит тем, кому нравится спокойный темп массажа и сочетание прикосновений с приятным запахом.' },
    forWho: { pl: ['gdy potrzebujesz spokojnego odpoczynku', 'dla osób lubiących masaż olejowy', 'przy zmęczeniu i napięciu', 'gdy aromat jest ważnym elementem relaksu'], ru: ['когда нужен спокойный отдых', 'для любителей масляного массажа', 'при усталости и напряжении', 'если аромат, важная часть расслабления'] },
    method: { pl: 'Przed sesją wybieramy zapach. Masaż może obejmować plecy lub całe ciało, zakres i czas potwierdzamy przed rezerwacją.', ru: 'Перед сеансом выбираем аромат. Массаж может охватывать спину или всё тело, объём и время подтверждаем до записи.' },
    recommendation: { pl: 'Jeśli masz alergie, astmę lub nadwrażliwość na zapachy, poinformuj mnie przed sesją. Możemy wybrać wersję bez aromatu.', ru: 'Если у вас аллергия, астма или чувствительность к запахам, сообщите до сеанса. Можно выбрать вариант без ароматизатора.' },
    note: { pl: 'Skład oleju i zapach ustalamy indywidualnie. Nie używamy produktu, na który masz stwierdzoną alergię.', ru: 'Состав масла и аромат согласуем индивидуально. Не используем продукт, на который у вас есть подтверждённая аллергия.' },
    variants: [{ label: 'Plecy', duration: '30 min', price: 165 }, { label: 'Całe ciało', duration: '60 min', price: 240 }], verified: true
  },
  {
    id: 'stones', cat: 'warm', filters: ['relax'], tag: 'HOT STONES', image: 'assets/hot-stones.webp',
    name: { pl: 'Masaż gorącymi kamieniami', ru: 'Массаж горячими камнями' },
    short: { pl: 'Ciepło kamieni i spokojne ruchy pomagają stworzyć głęboko relaksującą sesję.', ru: 'Тепло камней и спокойные движения создают расслабляющую атмосферу.' },
    description: { pl: 'Masaż z wykorzystaniem podgrzanych kamieni, które układam lub prowadzę po wybranych obszarach ciała. Temperatura i sposób użycia są dopasowywane do Twojego komfortu.', ru: 'Массаж с использованием нагретых камней, которые располагаются или перемещаются по отдельным участкам тела. Температура и техника подбираются с учётом вашего комфорта.' },
    forWho: { pl: ['gdy lubisz ciepło i spokojny rytm', 'przy potrzebie odpoczynku po intensywnym okresie', 'dla osób, którym odpowiada masaż z elementem termicznym'], ru: ['если нравится тепло и спокойный темп', 'когда хочется отдохнуть после напряжённого периода', 'для тех, кому подходит массаж с тепловым элементом'] },
    method: { pl: 'Przed rozpoczęciem sprawdzamy komfort temperatury. Kamienie nie powinny powodować pieczenia ani dyskomfortu.', ru: 'Перед началом проверяем комфортную температуру. Камни не должны вызывать жжение или неприятные ощущения.' },
    recommendation: { pl: 'Przed rezerwacją poinformuj o zaburzeniach czucia, problemach z krążeniem, ciąży lub innych kwestiach zdrowotnych. Możliwość wykonania zabiegu ustalimy indywidualnie.', ru: 'Перед записью сообщите о нарушениях чувствительности, проблемах с кровообращением, беременности и других особенностях здоровья. Возможность процедуры обсудим индивидуально.' },
    note: { pl: 'Cena i czas tej nowej usługi wymagają potwierdzenia przed publikacją cennika.', ru: 'Стоимость и длительность этой новой услуги нужно подтвердить перед публикацией прайса.' },
    variants: [{ duration: '60 min', price: null }, { duration: '90 min', price: null }], verified: true
  },
  {
    id: 'thai-mat', cat: 'thai', filters: ['thai', 'tension'], tag: 'THAI · MAT', image: 'assets/bodywork.webp',
    name: { pl: 'Tradycyjny masaż tajski na macie', ru: 'Традиционный тайский массаж на мате' },
    short: { pl: 'Tradycyjna praca z ciałem na macie, z elementami ucisku i rozciągania.', ru: 'Традиционная работа с телом на мате с элементами надавливания и растяжки.' },
    description: { pl: 'Masaż wykonywany na macie, w wygodnym stroju. Łączy sekwencje ucisku, mobilizacji i pasywnego rozciągania. Zakres ruchu zawsze dopasowuję do możliwości osoby ćwiczącej.', ru: 'Массаж выполняется на мате в удобной одежде. Сочетает надавливания, мобилизацию и пассивную растяжку. Амплитуда движений всегда подбирается под возможности человека.' },
    forWho: { pl: ['gdy czujesz sztywność i ograniczenie ruchu', 'dla osób, które lubią pracę z mobilnością', 'gdy chcesz poznać tradycyjną technikę tajską'], ru: ['если ощущается скованность и ограничение движений', 'для тех, кому интересна работа над подвижностью', 'если хотите познакомиться с традиционной тайской техникой'] },
    method: { pl: 'Technika obejmuje pracę w różnych pozycjach i kontrolowane rozciąganie. Nie jest to masaż olejowy. Przed sesją omawiamy zakres ruchu i ograniczenia.', ru: 'Техника включает работу в разных положениях и контролируемую растяжку. Это не масляный массаж. До сеанса обсуждаем амплитуду движений и ограничения.' },
    recommendation: { pl: 'Ukończone szkolenie z tradycyjnego masażu tajskiego (31 × 45 min) oraz kurs kompleksowy (50 × 45 min) potwierdzają przygotowanie do tej techniki.', ru: 'Подготовка подтверждена курсом традиционного тайского массажа (31 × 45 мин) и комплексным курсом (50 × 45 мин).'},
    note: { pl: 'Cena i czas wizyty do potwierdzenia. Przy świeżych urazach, ograniczeniach ruchu lub ciąży konieczna jest wcześniejsza rozmowa.', ru: 'Стоимость и длительность нужно подтвердить. При недавних травмах, ограничении движений или беременности требуется предварительное обсуждение.' },
    variants: [{ duration: '60 min', price: null }, { duration: '90 min', price: null }, { duration: '120 min', price: null }], verified: true
  },
  {
    id: 'thai-table', cat: 'thai', filters: ['thai', 'tension'], tag: 'THAI · TABLE', image: 'assets/massage-table.webp',
    name: { pl: 'Masaż tajski na stole', ru: 'Тайский массаж на массажном столе' },
    short: { pl: 'Elementy tradycyjnego masażu tajskiego w wygodnej pozycji na stole.', ru: 'Элементы традиционного тайского массажа в положении на массажном столе.' },
    description: { pl: 'Wariant pracy inspirowanej tradycyjnym masażem tajskim, wykonywany na stole do masażu. Łączy wybrane techniki ucisku i mobilizacji w formie dostosowanej do pozycji na stole.', ru: 'Вариант работы на основе традиционного тайского массажа, выполняемый на массажном столе. Сочетает отдельные приёмы надавливания и мобилизации с учётом положения на столе.' },
    forWho: { pl: ['gdy interesuje Cię masaż tajski, ale wolisz stół', 'przy uczuciu sztywności i napięcia', 'dla osób, które nie czują się komfortowo podczas pracy na macie'], ru: ['если интересен тайский массаж, но удобнее стол', 'при ощущении скованности и напряжения', 'для тех, кому неудобно заниматься на мате'] },
    method: { pl: 'Dobór technik zależy od potrzeb i możliwości ciała. Szkolenie z masażu tajskiego na stole obejmowało 11 × 45 minut.', ru: 'Приёмы подбираются под потребности и возможности тела. Обучение тайскому массажу на столе включало 11 × 45 минут.' },
    recommendation: { pl: 'Czas i koszt potwierdzamy przed zapisem.', ru: 'Длительность и стоимость подтверждаются перед записью.' },
    note: { pl: 'Przed sesją poinformuj o świeżych urazach, ograniczeniach ruchu i innych kwestiach zdrowotnych.', ru: 'До сеанса сообщите о недавних травмах, ограничении подвижности и других особенностях здоровья.' },
    variants: [{ duration: '60 min', price: null }, { duration: '90 min', price: null }], verified: true
  },
  {
    id: 'thai-foot', cat: 'thai', filters: ['thai', 'drain'], tag: 'THAI FOOT', image: 'assets/massage-foot.webp',
    name: { pl: 'Tajski masaż stóp z elementami refleksologii', ru: 'Тайский массаж стоп с элементами рефлексологии' },
    short: { pl: 'Praca ze stopami i podudziami inspirowana tradycyjną techniką tajską.', ru: 'Работа со стопами и голенями в традиционной тайской технике.' },
    description: { pl: 'Sesja skoncentrowana na stopach i podudziach. Wykorzystuje techniki manualne oraz elementy pracy z punktami refleksologicznymi. To osobna forma masażu, niezależna od masażu całego ciała.', ru: 'Сеанс сосредоточен на стопах и голенях. Используются ручные техники и элементы работы с рефлекторными зонами. Это самостоятельная процедура, не массаж всего тела.' },
    forWho: { pl: ['gdy stopy są zmęczone po całym dniu', 'dla osób spędzających dużo czasu na stojąco lub w ruchu', 'gdy chcesz poświęcić uwagę stopom i podudziom'], ru: ['если стопы устают к концу дня', 'для тех, кто много времени проводит стоя или в движении', 'если хочется уделить внимание стопам и голеням'] },
    method: { pl: 'Szkolenie z tradycyjnego tajskiego masażu stóp z elementami refleksologii obejmowało 11 × 45 minut. Zakres zabiegu i nacisk dopasowujemy do komfortu.', ru: 'Обучение традиционному тайскому массажу стоп с элементами рефлексологии включало 11 × 45 минут. Зону и силу воздействия подбираем по ощущениям.' },
    recommendation: { pl: 'Czas i koszt tej usługi potwierdzamy przed wizytą.', ru: 'Длительность и стоимость этой услуги подтверждаем до визита.' },
    note: { pl: 'Przy ranach, infekcjach, świeżych urazach stóp lub nasilonym bólu zabieg należy odłożyć i skonsultować.', ru: 'При ранах, инфекциях, недавних травмах стоп или сильной боли процедуру следует отложить и обсудить со специалистом.' },
    variants: [{ duration: '45 min', price: null }, { duration: '60 min', price: null }], verified: true
  },
  {
    id: 'couple', cat: 'relax', filters: ['relax'], tag: 'FOR TWO', image: 'assets/spa-detail.webp',
    name: { pl: 'Masaż dla dwojga', ru: 'Массаж для двоих' },
    short: { pl: 'Wspólny czas i wybrany wariant masażu dla dwóch osób.', ru: 'Совместное время и выбранный вариант массажа для двух человек.' },
    description: { pl: 'Propozycja wspólnego odpoczynku. Rodzaj masażu, sposób organizacji wizyty oraz możliwość wykonania zabiegów w tym samym czasie wymagają wcześniejszego uzgodnienia.', ru: 'Вариант совместного отдыха. Вид массажа, организация визита и возможность провести процедуры одновременно требуют предварительного согласования.' },
    forWho: { pl: ['dla par i bliskich osób', 'na wspólny odpoczynek lub prezent', 'dla osób, które chcą zaplanować wizytę razem'], ru: ['для пар и близких людей', 'для совместного отдыха или подарка', 'для тех, кто хочет запланировать визит вместе'] },
    method: { pl: 'Możliwe warianty obejmują masaż relaksacyjny, klasyczny, aromaterapeutyczny lub balijski. Dostępność drugiej osoby wykonującej masaż trzeba potwierdzić.', ru: 'Возможные варианты включают расслабляющий, классический, ароматерапевтический или балийский массаж. Наличие второго массажиста нужно уточнить.' },
    recommendation: { pl: 'Skontaktuj się przed rezerwacją, potwierdzimy, czy i w jakiej formie można zorganizować wizytę dla dwóch osób.', ru: 'Свяжитесь заранее, уточним, возможно ли организовать визит для двух человек и в каком формате.' },
    note: { pl: 'Sposób organizacji wizyty i dostępność wymagają potwierdzenia przed rezerwacją.', ru: 'Формат визита и наличие второго специалиста нужно согласовать заранее.' },
    variants: [{ label: 'Masaż aromaterapeutyczny całego ciała dla dwóch osób', duration: '60 min', price: 480 }, { label: 'Masaż klasyczny całego ciała dla dwóch osób', duration: '60 min', price: 480 }, { label: 'Masaż relaksacyjny całego ciała dla dwóch osób', duration: '60 min', price: 480 }, { label: 'Masaż balijski całego ciała dla dwóch osób', duration: '60 min', price: 480 }], verified: true
  }
];

const yogaServices = [
  { id: 'yoga-intro-online', name: { pl: 'Pierwsze indywidualne zajęcia jogi online', ru: 'Первое индивидуальное занятие йогой онлайн' }, desc: { pl: 'Spokojne wprowadzenie do praktyki na Zoomie. Poznasz podstawy oddechu i pierwsze pozycje dopasowane do możliwości ciała.', ru: 'Спокойное знакомство с практикой в Zoom. Вы попробуете базовое дыхание и первые позы с учётом возможностей тела.' }, duration: { pl: 'Czas do ustalenia', ru: 'Продолжительность по договорённости' }, price: 'Bezpłatnie', priceRu: 'Бесплатно', tag: 'ONLINE · START', note: { pl: 'Czas pierwszego spotkania ustalimy bezpośrednio z Inną.', ru: 'Продолжительность первого занятия согласуем лично с Инной.' } },
  { id: 'yoga-group-online-intro', name: { pl: 'Pierwsze grupowe zajęcia jogi online', ru: 'Первое групповое занятие йогой онлайн' }, desc: { pl: 'Przyjazne spotkanie online łączące ruch, oddech i relaksację. Nie potrzebujesz wcześniejszego doświadczenia.', ru: 'Дружелюбное онлайн-занятие, объединяющее движение, дыхание и расслабление. Опыт не требуется.' }, duration: { pl: '45 min', ru: '45 мин' }, price: 'Bezpłatnie', priceRu: 'Бесплатно', tag: 'ONLINE · GRUPA' },
  { id: 'yoga-consult', name: { pl: 'Konsultacja jogiczna przez Zoom', ru: 'Консультация по йоге в Zoom' }, desc: { pl: 'Rozmowa o Twoich celach, doświadczeniu i stylu życia. Na tej podstawie powstaje indywidualny kierunek dalszej praktyki.', ru: 'Обсуждение целей, опыта и образа жизни. На этой основе формируется индивидуальное направление дальнейшей практики.' }, duration: { pl: '15-20 min', ru: '15-20 мин' }, price: 'Bezpłatnie', priceRu: 'Бесплатно', tag: 'KONSULTACJA' },
  { id: 'yoga-morning-730', name: { pl: 'Joga poranna, grupa 7:30', ru: 'Утренняя йога, группа 7:30' }, desc: { pl: 'Poranna praktyka z asanami, świadomym oddechem i relaksacją. Kameralna grupa, tempo dostosowane do uczestników. Zajęcia odbywają się przy minimum 2 osobach.', ru: 'Утренняя практика с асанами, осознанным дыханием и расслаблением. Небольшая группа, темп адаптируется к участникам. Занятие проводится при наличии минимум двух человек.' }, duration: { pl: '60 min · Pon / Śr / Pt', ru: '60 мин · Пн / Ср / Пт' }, price: '60 zł', priceRu: '60 zł', tag: 'GRUPA · 7:30' },
  { id: 'yoga-morning-900', name: { pl: 'Joga poranna, druga grupa', ru: 'Утренняя йога, вторая группа' }, desc: { pl: 'Format i opis praktyki są takie same jak w pierwszej grupie. Godzinę rozpoczęcia drugiej grupy ustalimy bezpośrednio.', ru: 'Формат и содержание практики такие же, как в первой группе. Время начала второй группы согласуем лично.' }, duration: { pl: '60 min · godzina do ustalenia', ru: '60 мин · время по договорённости' }, price: '60 zł', priceRu: '60 zł', tag: 'GRUPA · DO USTALENIA' },
  { id: 'yoga-individual-60', name: { pl: 'Joga, zajęcia indywidualne', ru: 'Йога, индивидуальное занятие' }, desc: { pl: 'Praktyka dopasowana do Twoich potrzeb: praca z mobilnością, siłą, postawą i oddechem. Możliwa dla osób początkujących.', ru: 'Практика под ваши задачи: подвижность, сила, осанка и дыхание. Подходит и для начинающих.' }, duration: { pl: '60 min', ru: '60 мин' }, price: '120 zł', priceRu: '120 zł', tag: 'INDYWIDUALNIE' },
  { id: 'yoga-individual-90', name: { pl: 'Joga, zajęcia indywidualne 90 min', ru: 'Йога, индивидуальное занятие 90 минут' }, desc: { pl: 'Dłuższa sesja na pogłębioną praktykę: asany, pranajama, relaksacja i koncentracja.', ru: 'Более продолжительная сессия: асаны, пранаяма, расслабление и концентрация.' }, duration: { pl: '90 min', ru: '90 мин' }, price: '170 zł', priceRu: '170 zł', tag: 'INDYWIDUALNIE' },
  { id: 'yoga-online', name: { pl: 'Indywidualna sesja jogi online', ru: 'Индивидуальная сессия йоги онлайн' }, desc: { pl: 'Sesja przez Zoom dopasowana do Twoich potrzeb, poziomu i celów. Ćwiczysz w domu, we własnym tempie.', ru: 'Занятие в Zoom с учётом ваших потребностей, уровня и целей. Практикуете дома, в своём темпе.' }, duration: { pl: '60 min', ru: '60 мин' }, price: '100 zł', priceRu: '100 zł', tag: 'ONLINE · INDYWIDUALNIE' }
];

const filters = {
  all: null,
  relax: ['relax'],
  tension: ['tension'],
  face: ['face'],
  drain: ['drain'],
  thai: ['thai']
};

const translations = {
  pl: {
    skip: 'Przejdź do treści', navApproach: 'Mój sposób pracy', navMassage: 'Masaż', navYoga: 'Joga', navCertificates: 'Certyfikaty', navReviews: 'Opinie', bookHeader: 'Umów wizytę', fieldDuration: 'Wariant i czas', selectDuration: 'Wybierz czas', fieldPrice: 'Cena wybranego wariantu', chooseServicePrice: 'Wybierz usługę', priceAppearsHere: 'Cena pojawi się po wyborze wariantu',
    heroEyebrow: 'Masaż · joga · uważność', heroTitle: 'Zwolnij.<br><span class="hero-title-line">Wróć do siebie.</span>', heroCopy: 'Indywidualna praca z ciałem i spokojna praktyka ruchu. Bez pośpiechu, z szacunkiem do Twoich potrzeb i możliwości.', heroPrimary: 'Poznaj ofertę', heroSecondary: 'Umów wizytę', heroSignature: 'Miejsce na oddech. Czas dla ciała.', heroImageCaption: 'Dotyk. Oddech. Chwila dla siebie.', heroVisualNote: 'Indywidualne spotkania · masaż i joga', massageChoiceEyebrow: 'Dotyk i regeneracja', yogaChoiceEyebrow: 'Ruch i oddech',
    introKicker: 'Mój sposób pracy', introEyebrow: 'Mniej pośpiechu. Więcej uwagi.', introTitle: 'Dobre samopoczucie<br>zaczyna się od <em>kontaktu.</em>', introCopy: 'Każde ciało ma własną historię i własne tempo. Dlatego dobieram technikę, intensywność i czas do tego, czego potrzebujesz w danym momencie. Zaczynam od rozmowy, uważności i poznania Twoich oczekiwań.', introCaption: 'Ina Shyrokaya · masażystka i instruktorka jogi',
    choiceEyebrow: 'Dwie formy pracy z ciałem', choiceTitle: 'Wybierz to,<br>czego potrzebujesz.', choiceCopy: 'Czasem potrzebujesz dotyku i rozluźnienia. Innym razem, ruchu, oddechu i spokojnej praktyki. Zacznij od tego, co dziś jest Ci najbliższe.', massageChoiceTitle: 'Masaż', massageChoiceCopy: 'Rozluźnienie, regeneracja i uważny dotyk, w tempie dopasowanym do Ciebie.', yogaChoiceTitle: 'Joga', yogaChoiceCopy: 'Ruch, oddech i praktyka, którą można zacząć na swoim poziomie.',
    massageKicker: 'Masaż', massageEyebrow: 'Relaks · rozluźnienie · regeneracja', massageTitle: 'Wybierz masaż<br><em>według swoich potrzeb.</em>', massageCopy: 'Nie musisz znać nazw technik. Zacznij od tego, co chcesz poczuć: odpocząć, rozluźnić napięte mięśnie, zadbać o twarz lub spróbować masażu tajskiego.', tabsHint: 'Co jest Ci teraz najbardziej potrzebne?', filterAll: 'Wszystkie usługi', filterRelax: 'Odpocząć i wyciszyć się', filterTension: 'Rozluźnić napięcie', filterFace: 'Twarz i żuchwa', filterDrain: 'Lekkość i drenaż', filterThai: 'Masaże tajskie', serviceDetail: 'Poznaj masaż', pricePending: 'Cena i czas do potwierdzenia', serviceDisclaimer: 'Czas i koszt wariantów oznaczonych jako „do potwierdzenia” ustalam indywidualnie przed wizytą.',
    yogaImageNote: 'Ruch bez presji. Praktyka bez porównań.', yogaKicker: 'Joga', yogaEyebrow: 'Praktyka dopasowana do Ciebie', yogaTitle: 'Nie musisz być<br>bardziej elastyczna.<br><em>Wystarczy zacząć.</em>', yogaCopy: 'Joga to nie konkurs na najtrudniejszą pozycję. To połączenie ruchu, oddechu i chwili uważności. Ćwiczenia dobieram do Twojego doświadczenia, samopoczucia i celów, od pierwszego spotkania po regularną praktykę.', yogaLanguages: 'Zajęcia po polsku lub rosyjsku', beginnerEyebrow: 'Pierwszy raz na macie?', beginnerTitle: 'Nie musisz być rozciągnięta. Nie musisz mieć doświadczenia.', beginnerCopy: 'Nie ma znaczenia, ile masz lat, jaki masz rozmiar ubrania ani czy kiedykolwiek ćwiczyłaś. Zaczynamy od prostych, dostępnych ruchów i spokojnego oddechu. Tempo oraz warianty pozycji dopasowuję do Ciebie.', beginnerCta: 'Poznaj zajęcia', soundEyebrow: 'Dźwięk i wyciszenie', soundTitle: 'Praktyka, która kończy się spokojem.', soundCopy: 'W wybranych zajęciach korzystam z mis tybetańskich i delikatnych dźwięków inspirowanych naturą, szumem morza, fal i spokojnego przypływu. To moment, by skierować uwagę do wewnątrz, odetchnąć i łagodnie zakończyć praktykę.', soundNote: 'Element relaksacji · nie wymaga wcześniejszego doświadczenia', yogaOffersEyebrow: 'Spotkajmy się na macie', yogaOffersTitle: 'Wybierz format praktyki', yogaOffersCopy: 'Online, indywidualnie lub w małej grupie. Znajdź formę, która pasuje do Twojego rytmu.', yogaDisclaimer: 'Zajęcia odbywają się po wcześniejszym uzgodnieniu terminu. Godzinę drugiej grupy porannej oraz długość pierwszego spotkania online ustalimy bezpośrednio z Inną.',
    aboutEyebrow: 'Poznajmy się', aboutTitle: 'Cześć, jestem <em>Ina.</em>', aboutCopy: 'Jestem masażystką i instruktorką jogi. Pracuję z osobami, które chcą poczuć mniej napięcia, odzyskać swobodę ruchu lub po prostu znaleźć czas dla siebie. Prowadzę sesje spokojnie i uważnie, po polsku lub rosyjsku.', aboutDetail: 'Każde spotkanie zaczynam od rozmowy. Nie narzucam jednego tempa ani jednej techniki, dobieram je do Twoich potrzeb i możliwości.', aboutCaption: 'Ina Shyrokaya', aboutCta: 'Umów pierwsze spotkanie',
    certEyebrow: 'Szkolenia i rozwój', certTitle: 'Nauka, którą<br><em>widać w praktyce.</em>', certCopy: 'Doskonalenie technik i regularne szkolenia są częścią mojej pracy. Poniżej znajdziesz certyfikaty ukończonych kursów masażu tajskiego.', certName1: 'Kompleksowy tradycyjny masaż tajski', certName2: 'Masaż tajski na stole', certName3: 'Tradycyjny masaż tajski', certName4: 'Tajski masaż stóp z elementami refleksologii', certFootnote: 'Kliknij certyfikat, aby powiększyć zdjęcie. Są to dokumenty potwierdzające ukończenie konkretnych szkoleń.',
    reviewsEyebrow: 'Opinie klientów', reviewsTitle: 'Zaufanie buduje się<br><em>spotkanie po spotkaniu.</em>', ratingBased: '11 opinii w Booksy', reviewOne: 'Bardzo dobra trenerka!', reviewTwo: 'Świetna atmosfera i pełen profesjonalizm.', reviewThree: 'Bardzo przyjemny dźwięk mis tybetańskich.', allReviews: 'Zobacz wszystkie opinie w Booksy', reviewsSource: 'Fragmenty opinii klientów z profilu Booksy. Każda karta prowadzi do oryginalnego profilu.',
    visitEyebrow: 'Przed spotkaniem', visitTitle: 'Najpierw rozmowa.<br><em>Potem dobry wybór.</em>', visitCopy: 'Przed sesją porozmawiamy o Twoich oczekiwaniach, samopoczuciu i ewentualnych ograniczeniach. Dzięki temu łatwiej dobrać odpowiednią usługę i jej intensywność.', addressLabel: 'Adres', mapLink: 'Otwórz mapę ↗', phoneLabel: 'Telefon', formEyebrow: 'Zapytanie o termin', formTitle: 'Wybierz dogodny czas', formIntro: 'Wybierz usługę, wariant i dogodny termin. Po wysłaniu otworzy się WhatsApp z gotową wiadomością.', fieldService: 'Usługa', selectService: 'Wybierz usługę', fieldDate: 'Preferowany dzień', fieldTime: 'Preferowana godzina', selectTime: 'Wybierz godzinę', fieldName: 'Imię', fieldPhone: 'Telefon', fieldMessage: 'Wiadomość (opcjonalnie)', messagePlaceholder: 'Jeśli chcesz, dodaj kilka słów.', consent: 'Zgadzam się na kontakt w sprawie wybranego terminu.', submitBooking: 'Wyślij prośbę o termin', formDisclaimer: 'Po wysłaniu otworzy się WhatsApp z przygotowaną wiadomością. Termin zostanie potwierdzony po odpowiedzi.', formSuccess: 'Zapytanie jest gotowe. Możesz wysłać je bezpośrednio przez WhatsApp lub skopiować treść.', copyRequest: 'Kopiuj szczegóły', copied: 'Skopiowano', openWhatsAppButton: 'Otwórz WhatsApp ↗',
    footerStatement: 'Miejsce na oddech. Czas dla ciała.', backTop: 'Do góry ↑', dialogBook: 'Wybierz termin', forWho: 'Dla kogo', how: 'Jak wygląda sesja', recommend: 'Warto wiedzieć', important: 'Ważne', duration: 'Czas', price: 'Cena', byArrangement: 'Do ustalenia',
    yogaBook: 'Umów zajęcia', yogaDuration: 'Czas trwania', yogaPrice: 'Cena'
  },
  ru: {
    skip: 'Перейти к содержанию', navApproach: 'Мой подход', navMassage: 'Массаж', navYoga: 'Йога', navCertificates: 'Сертификаты', navReviews: 'Отзывы', bookHeader: 'Записаться', fieldDuration: 'Вариант и длительность', selectDuration: 'Выберите длительность', fieldPrice: 'Стоимость выбранного варианта', chooseServicePrice: 'Выберите услугу', priceAppearsHere: 'Стоимость появится после выбора варианта',
    heroEyebrow: 'Массаж · йога · внимание к себе', heroTitle: 'Замедлитесь.<br><span class="hero-title-line">Вернитесь к себе.</span>', heroCopy: 'Индивидуальная работа с телом и спокойная практика движения. Без спешки, с уважением к вашим потребностям и возможностям.', heroPrimary: 'Посмотреть услуги', heroSecondary: 'Записаться на встречу', heroSignature: 'Пространство для дыхания. Время для тела.', heroImageCaption: 'Прикосновение. Дыхание. Время для себя.', heroVisualNote: 'Индивидуальные встречи · массаж и йога', massageChoiceEyebrow: 'Прикосновение и восстановление', yogaChoiceEyebrow: 'Движение и дыхание',
    introKicker: 'Мой подход', introEyebrow: 'Меньше спешки. Больше внимания.', introTitle: 'Хорошее самочувствие<br>начинается с <em>контакта.</em>', introCopy: 'У каждого тела своя история и свой темп. Поэтому я подбираю технику, интенсивность и продолжительность под то, что вам нужно именно сейчас. Начинаю с разговора, внимания и понимания ваших ожиданий.', introCaption: 'Ina Shyrokaya · массажист и инструктор йоги',
    choiceEyebrow: 'Два способа работать с телом', choiceTitle: 'Выберите то,<br>что нужно сейчас.', choiceCopy: 'Иногда нужны прикосновения и расслабление. В другой раз нужны движение, дыхание и спокойная практика. Начните с того, что ближе вам сегодня.', massageChoiceTitle: 'Массаж', massageChoiceCopy: 'Расслабление, восстановление и внимательные прикосновения в комфортном для вас темпе.', yogaChoiceTitle: 'Йога', yogaChoiceCopy: 'Движение, дыхание и практика, которую можно начать на своём уровне.',
    massageKicker: 'Массаж', massageEyebrow: 'Расслабление · снятие напряжения · восстановление', massageTitle: 'Выберите массаж<br><em>по своим потребностям.</em>', massageCopy: 'Не обязательно разбираться в названиях техник. Начните с того, чего вам хочется: отдохнуть, снять мышечное напряжение, уделить внимание лицу или попробовать тайский массаж.', tabsHint: 'Что вам сейчас нужнее всего?', filterAll: 'Все услуги', filterRelax: 'Отдохнуть и расслабиться', filterTension: 'Снять напряжение', filterFace: 'Лицо и челюсть', filterDrain: 'Лёгкость и дренаж', filterThai: 'Тайские техники', serviceDetail: 'Подробнее о массаже', pricePending: 'Стоимость и время уточняются', serviceDisclaimer: 'Продолжительность и стоимость вариантов с пометкой «уточняется» согласуем индивидуально до встречи.',
    yogaImageNote: 'Движение без давления. Практика без сравнений.', yogaKicker: 'Йога', yogaEyebrow: 'Практика с учётом ваших возможностей', yogaTitle: 'Не нужно быть<br>гибкой.<br><em>Достаточно начать.</em>', yogaCopy: 'Йога не сводится к сложным позам. Это сочетание движения, дыхания и внимания к себе. Упражнения подбираю с учётом вашего опыта, самочувствия и целей, от первого знакомства до регулярной практики.', yogaLanguages: 'Занятия на польском или русском', beginnerEyebrow: 'Впервые на коврике?', beginnerTitle: 'Не нужно быть гибкой. Не нужен спортивный опыт.', beginnerCopy: 'Не имеет значения, сколько вам лет, какой у вас размер одежды и занимались ли вы спортом раньше. Начинаем с простых доступных движений и спокойного дыхания. Темп и варианты упражнений подбираю под вас.', beginnerCta: 'Посмотреть занятия', soundEyebrow: 'Звук и расслабление', soundTitle: 'Практика, которая заканчивается спокойствием.', soundCopy: 'На отдельных занятиях я использую тибетские чаши и мягкие звуки, вдохновлённые природой: шум моря, волн и прибоя. Это время, чтобы переключить внимание внутрь, спокойно подышать и мягко завершить практику.', soundNote: 'Элемент расслабления · опыт не требуется', yogaOffersEyebrow: 'Встретимся на коврике', yogaOffersTitle: 'Выберите формат практики', yogaOffersCopy: 'Онлайн, индивидуально или в небольшой группе. Выберите вариант, который подходит вашему ритму.', yogaDisclaimer: 'Занятия проходят по предварительной договорённости. Время второй утренней группы и продолжительность первого онлайн-занятия уточним напрямую у Инны.',
    aboutEyebrow: 'Давайте познакомимся', aboutTitle: 'Здравствуйте, я <em>Инна.</em>', aboutCopy: 'Я массажист и инструктор йоги. Работаю с людьми, которые хотят уменьшить напряжение, вернуть свободу движений или просто найти время для себя. Провожу занятия спокойно и внимательно, на польском или русском языке.', aboutDetail: 'Каждую встречу начинаю с разговора. Не навязываю один темп или одну технику, подбираю их с учётом ваших потребностей и возможностей.', aboutCaption: 'Ina Shyrokaya', aboutCta: 'Записаться на первую встречу',
    certEyebrow: 'Обучение и развитие', certTitle: 'Знания, которые<br><em>применяются на практике.</em>', certCopy: 'Я регулярно совершенствую техники и продолжаю учиться. Здесь представлены сертификаты о прохождении курсов тайского массажа.', certName1: 'Комплексный традиционный тайский массаж', certName2: 'Тайский массаж на столе', certName3: 'Традиционный тайский массаж', certName4: 'Тайский массаж стоп с элементами рефлексологии', certFootnote: 'Нажмите на сертификат, чтобы увеличить изображение. Документы подтверждают прохождение конкретных учебных курсов.',
    reviewsEyebrow: 'Отзывы клиентов', reviewsTitle: 'Доверие складывается<br><em>из каждой встречи.</em>', ratingBased: '11 отзывов в Booksy', reviewOne: 'Очень хороший преподаватель!', reviewTwo: 'Прекрасная атмосфера и профессионализм.', reviewThree: 'Очень приятный звук тибетских чаш.', allReviews: 'Посмотреть все отзывы в Booksy', reviewsSource: 'Фрагменты отзывов из профиля Booksy. Каждая карточка ведёт к исходному профилю.',
    visitEyebrow: 'Перед встречей', visitTitle: 'Сначала разговор.<br><em>Затем правильный выбор.</em>', visitCopy: 'Перед сеансом обсудим ваши ожидания, самочувствие и возможные ограничения. Так будет проще выбрать подходящую услугу и интенсивность.', addressLabel: 'Адрес', mapLink: 'Открыть карту ↗', phoneLabel: 'Телефон', formEyebrow: 'Запрос времени', formTitle: 'Выберите удобное время', formIntro: 'Выберите услугу, вариант и удобное время. После отправки откроется WhatsApp с готовым сообщением.', fieldService: 'Услуга', selectService: 'Выберите услугу', fieldDate: 'Желаемый день', fieldTime: 'Предпочтительное время', selectTime: 'Выберите время', fieldName: 'Имя', fieldPhone: 'Телефон', fieldMessage: 'Сообщение (необязательно)', messagePlaceholder: 'При желании добавьте несколько слов.', consent: 'Я согласен(на) на связь по поводу выбранного времени.', submitBooking: 'Отправить запрос', formDisclaimer: 'После отправки откроется WhatsApp с подготовленным сообщением. Время будет подтверждено ответом.', formSuccess: 'Запрос подготовлен. Отправьте его через WhatsApp или скопируйте текст.', copyRequest: 'Скопировать детали', copied: 'Скопировано', openWhatsAppButton: 'Открыть WhatsApp ↗',
    footerStatement: 'Пространство для дыхания. Время для тела.', backTop: 'Наверх ↑', dialogBook: 'Выбрать время', forWho: 'Кому подойдёт', how: 'Как проходит сеанс', recommend: 'Рекомендация', important: 'Важно', duration: 'Длительность', price: 'Стоимость', byArrangement: 'По договорённости',
    yogaBook: 'Записаться на занятие', yogaDuration: 'Длительность', yogaPrice: 'Стоимость'
  }
};

let currentLang = 'pl';
let currentFilter = 'all';
const grid = document.getElementById('service-grid');
const yogaGrid = document.getElementById('yoga-grid');
const serviceSelect = document.getElementById('booking-service');
const serviceDialog = document.getElementById('service-dialog');
const certificateDialog = document.getElementById('certificate-dialog');
const certificateData = [
  { src: 'assets/cert-comprehensive.webp', title: { pl: 'Kompleksowy tradycyjny masaż tajski · 50 × 45 min · 11-15.10.2026', ru: 'Комплексный традиционный тайский массаж · 50 × 45 мин · 11-15.10.2026' } },
  { src: 'assets/cert-table.webp', title: { pl: 'Masaż tajski na stole · 11 × 45 min · 15.10.2026', ru: 'Тайский массаж на столе · 11 × 45 мин · 15.10.2026' } },
  { src: 'assets/cert-thai.webp', title: { pl: 'Tradycyjny masaż tajski · 31 × 45 min · 12-14.10.2026', ru: 'Традиционный тайский массаж · 31 × 45 мин · 12-14.10.2026' } },
  { src: 'assets/cert-foot.webp', title: { pl: 'Tajski masaż stóp z elementami refleksologii · 11 × 45 min · 11.10.2026', ru: 'Тайский массаж стоп с элементами рефлексологии · 11 × 45 мин · 11.10.2026' } }
];

function t(key) { return translations[currentLang][key] ?? key; }
function text(item) { return item?.[currentLang] ?? ''; }
function formatPrice(value) { return new Intl.NumberFormat('pl-PL', { maximumFractionDigits: 0 }).format(value) + ' zł'; }
function getService(id) { return massageServices.find(service => service.id === id); }
function categoryLabel(category) {
  const map = { relax: currentLang === 'pl' ? 'Relaks' : 'Расслабление', warm: currentLang === 'pl' ? 'Ciepłe rytuały' : 'Тёплые ритуалы', thai: currentLang === 'pl' ? 'Techniki tajskie' : 'Тайские техники', tension: currentLang === 'pl' ? 'Rozluźnienie' : 'Снятие напряжения', face: currentLang === 'pl' ? 'Twarz' : 'Лицо', drain: currentLang === 'pl' ? 'Drenaż' : 'Дренаж' };
  return map[category] || '';
}
function priceSummary(service) {
  if (!service.variants.length || service.variants.some(v => v.price == null)) return t('pricePending');
  const prices = service.variants.map(variant => variant.price);
  const min = Math.min(...prices); const max = Math.max(...prices);
  return min === max ? formatPrice(min) : `${formatPrice(min)} - ${formatPrice(max)}`;
}

// Appear-on-scroll: restrained motion, and all elements remain visible without JS.
let revealObserver = null;
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: .12, rootMargin: '0px 0px -28px 0px' });
}
function observeReveal(root = document) {
  root.querySelectorAll('.reveal:not(.js-reveal), .service-card:not(.js-reveal), .yoga-card:not(.js-reveal)').forEach((item, index) => {
    item.classList.add('reveal', 'js-reveal');
    item.style.setProperty('--reveal-delay', `${Math.min(index % 3, 2) * 85}ms`);
    if (revealObserver) revealObserver.observe(item); else item.classList.add('is-visible');
  });
}

function renderServices() {
  const visible = massageServices.filter(service => currentFilter === 'all' || service.filters.includes(currentFilter));
  grid.innerHTML = visible.map(service => `
    <article class="service-card">
      <div class="service-photo"><img src="${assetUrl(service.image)}" alt="${text(service.name)}" loading="lazy"><span class="service-tag">${service.tag}</span></div>
      <div class="service-body"><span class="service-category">${categoryLabel(service.cat)}</span><h3>${text(service.name)}</h3><p>${text(service.short)}</p>
      <div class="service-footer"><button class="service-more" type="button" data-service="${service.id}"><span>${t('serviceDetail')}</span><span aria-hidden="true">↗</span></button></div></div>
    </article>`).join('');
  observeReveal(grid);
}

function renderYoga() {
  const yogaImages = {
    'yoga-intro-online': 'assets/yoga-breath.webp',
    'yoga-group-online-intro': 'assets/yoga-people.webp',
    'yoga-consult': 'assets/yoga-sound.webp',
    'yoga-morning-730': 'assets/yoga-group.webp',
    'yoga-morning-900': 'assets/yoga-mono.webp',
    'yoga-individual-60': 'assets/yoga-block.webp',
    'yoga-individual-90': 'assets/yoga-bridge.webp',
    'yoga-online': 'assets/yoga-breath.webp'
  };
  yogaGrid.innerHTML = yogaServices.map(service => `<article class="yoga-card reveal">
    <div class="yoga-photo"><img src="${assetUrl(yogaImages[service.id] || 'assets/yoga-people.webp')}" alt="${text(service.name)}" loading="lazy"></div>
    <span class="service-category">${service.tag}</span>
    <div class="yoga-copy"><h4>${text(service.name)}</h4><p>${text(service.desc)}</p>${service.note ? `<p class="yoga-note">${text(service.note)}</p>` : ''}</div>
    <div class="yoga-meta"><span class="yoga-price">${currentLang === 'pl' ? service.price : service.priceRu}</span><span class="yoga-duration">${text(service.duration)}</span><button class="yoga-book" type="button" data-book-yoga="${service.id}">${t('yogaBook')}</button></div>
  </article>`).join('');
  observeReveal(yogaGrid);
}

function renderServiceSelect() {
  const selected = serviceSelect.value;
  const massageOptions = massageServices.map(service => `<option value="massage:${service.id}">${text(service.name)}</option>`).join('');
  const yogaOptions = yogaServices.map(service => `<option value="yoga:${service.id}">${text(service.name)}</option>`).join('');
  serviceSelect.innerHTML = `<option value="">${t('selectService')}</option><optgroup label="${currentLang === 'pl' ? 'Masaż' : 'Массаж'}">${massageOptions}</optgroup><optgroup label="${currentLang === 'pl' ? 'Joga' : 'Йога'}">${yogaOptions}</optgroup>`;
  if (selected && [...serviceSelect.options].some(option => option.value === selected)) serviceSelect.value = selected;
  updateBookingVariants();
}

function selectedBookingItem() {
  const value = serviceSelect.value;
  if (value.startsWith('massage:')) return { kind: 'massage', service: getService(value.slice(8)) };
  if (value.startsWith('yoga:')) return { kind: 'yoga', service: yogaServices.find(item => item.id === value.slice(5)) };
  return { kind: '', service: null };
}
function variantLabel(variant) {
  return [variant.label, variant.duration].filter(Boolean).join(', ');
}
function updateBookingVariants(preferredIndex = null) {
  const durationSelect = document.getElementById('booking-duration');
  const priceOutput = document.getElementById('booking-price');
  const priceNote = document.getElementById('booking-price-note');
  const selected = selectedBookingItem();
  const service = selected.service;
  durationSelect.innerHTML = '';
  if (!service) {
    durationSelect.disabled = true;
    durationSelect.innerHTML = `<option value="">${t('selectDuration')}</option>`;
    priceOutput.textContent = t('chooseServicePrice');
    priceNote.textContent = t('priceAppearsHere');
    return;
  }
  let variants = [];
  if (selected.kind === 'massage') variants = service.variants;
  else variants = [{ duration: text(service.duration), priceLabel: currentLang === 'pl' ? service.price : service.priceRu, price: null, isTextPrice: true }];
  if (!variants.length) variants = [{ duration: t('byArrangement'), price: null }];
  durationSelect.disabled = false;
  durationSelect.innerHTML = variants.map((variant, index) => `<option value="${index}">${variantLabel(variant) || variant.duration}</option>`).join('');
  const index = preferredIndex !== null && preferredIndex >= 0 && preferredIndex < variants.length ? preferredIndex : 0;
  durationSelect.value = String(index);
  const variant = variants[index];
  if (variant.isTextPrice) priceOutput.textContent = variant.priceLabel;
  else priceOutput.textContent = variant.price == null ? t('pricePending') : formatPrice(variant.price);
  priceNote.textContent = selected.kind === 'massage' ? (variant.label || text(service.name)) : t('yogaDuration');
}
function scrollToBooking(value = null, preferredIndex = 0) {
  if (value) {
    serviceSelect.value = value;
    updateBookingVariants(preferredIndex);
  }
  document.getElementById('booking').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  window.setTimeout(() => serviceSelect.focus({ preventScroll: true }), 450);
}

function openService(id) {
  const service = getService(id);
  if (!service) return;
  serviceDialog.dataset.service = id;
  document.getElementById('dialog-image').innerHTML = `<img src="${assetUrl(service.image)}" alt="${text(service.name)}">`;
  document.getElementById('dialog-category').textContent = categoryLabel(service.cat);
  document.getElementById('dialog-title').textContent = text(service.name);
  document.getElementById('dialog-description').textContent = text(service.description);
  const sections = [
    [t('forWho'), `<ul>${service.forWho[currentLang].map(item => `<li>${item}</li>`).join('')}</ul>`],
    [t('how'), `<p>${text(service.method)}</p>`],
    [t('recommend'), `<p>${text(service.recommendation)}</p>`],
    [t('important'), `<p>${text(service.note)}</p>`]
  ];
  document.getElementById('dialog-sections').innerHTML = sections.map(([title, body]) => `<section class="dialog-section"><h4>${title}</h4>${body}</section>`).join('');
  document.getElementById('dialog-prices').innerHTML = service.variants.length
    ? service.variants.map(variant => `<div class="price-option"><span>${variant.label ? `${variant.label}, ` : ''}${t('duration')}: ${variant.duration}</span><strong>${variant.price == null ? t('pricePending') : formatPrice(variant.price)}</strong></div>`).join('') + `<p class="dialog-price-note">${text(service.recommendation)}</p>`
    : `<p class="dialog-price-note">${t('pricePending')}. ${currentLang === 'pl' ? 'Wariant i cenę ustalimy przed spotkaniem.' : 'Продолжительность и стоимость согласуем до встречи.'}</p>`;
  serviceDialog.showModal();
  document.body.classList.add('dialog-open');
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (translations[lang][key] !== undefined) element.innerHTML = translations[lang][key];
  });
  document.querySelectorAll('[data-placeholder]').forEach(element => {
    const key = element.dataset.placeholder;
    if (translations[lang][key] !== undefined) element.placeholder = translations[lang][key];
  });
  document.querySelectorAll('.lang-button').forEach(button => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  renderServices(); renderYoga(); renderServiceSelect();
  document.getElementById('certificate-full-caption').textContent = certificateData[Number(document.getElementById('certificate-full-image').dataset.index || 0)].title[lang];
}

// Massage tabs.
document.getElementById('massage-tabs').addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  currentFilter = button.dataset.filter;
  document.querySelectorAll('.filter-button').forEach(item => {
    const active = item === button;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-selected', String(active));
  });
  renderServices();
});

grid.addEventListener('click', event => {
  const trigger = event.target.closest('[data-service]');
  if (trigger) openService(trigger.dataset.service);
});
document.getElementById('dialog-book-button').addEventListener('click', () => {
  const value = serviceDialog.dataset.service ? `massage:${serviceDialog.dataset.service}` : '';
  serviceDialog.close();
  document.body.classList.remove('dialog-open');
  scrollToBooking(value, 0);
});
yogaGrid.addEventListener('click', event => {
  const trigger = event.target.closest('[data-book-yoga]');
  if (trigger) scrollToBooking(`yoga:${trigger.dataset.bookYoga}`, 0);
});
serviceSelect.addEventListener('change', () => updateBookingVariants());
document.getElementById('booking-duration').addEventListener('change', () => updateBookingVariants(Number(document.getElementById('booking-duration').value)));
document.querySelectorAll('.lang-button').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));

// Hero image rotator: pauses on hover/focus, supports keyboard and reduced motion.
const heroSlides = [...document.querySelectorAll('.hero-slide')];
const heroDots = document.getElementById('hero-dots');
let heroIndex = 0; let heroTimer = null;
heroDots.innerHTML = heroSlides.map((_, index) => `<button class="hero-dot ${index === 0 ? 'is-active' : ''}" type="button" aria-label="${currentLang === 'pl' ? 'Zdjęcie' : 'Фото'} ${index + 1}" aria-pressed="${index === 0}"></button>`).join('');
const dotButtons = [...heroDots.querySelectorAll('button')];
function showHeroSlide(index) {
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, i) => slide.classList.toggle('is-active', i === heroIndex));
  dotButtons.forEach((dot, i) => { dot.classList.toggle('is-active', i === heroIndex); dot.setAttribute('aria-pressed', String(i === heroIndex)); });
}
function startHeroTimer() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  stopHeroTimer(); heroTimer = window.setInterval(() => showHeroSlide(heroIndex + 1), 6500);
}
function stopHeroTimer() { if (heroTimer) window.clearInterval(heroTimer); heroTimer = null; }
dotButtons.forEach((dot, index) => dot.addEventListener('click', () => { showHeroSlide(index); startHeroTimer(); }));
document.querySelector('.hero-prev').addEventListener('click', () => { showHeroSlide(heroIndex - 1); startHeroTimer(); });
document.querySelector('.hero-next').addEventListener('click', () => { showHeroSlide(heroIndex + 1); startHeroTimer(); });
const heroPanel = document.querySelector('.hero-panel');
heroPanel.addEventListener('mouseenter', stopHeroTimer); heroPanel.addEventListener('mouseleave', startHeroTimer);
heroPanel.addEventListener('focusin', stopHeroTimer); heroPanel.addEventListener('focusout', startHeroTimer);
startHeroTimer();

// Mobile menu.
const mobileToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
mobileToggle.addEventListener('click', () => {
  const open = mobileToggle.getAttribute('aria-expanded') !== 'true';
  mobileToggle.setAttribute('aria-expanded', String(open));
  mobileMenu.hidden = !open;
});
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { mobileMenu.hidden = true; mobileToggle.setAttribute('aria-expanded', 'false'); }));

// Certificate slider and enlarged view.
const certTrack = document.getElementById('certificate-track');
document.querySelector('.cert-prev').addEventListener('click', () => certTrack.scrollBy({ left: -260, behavior: 'smooth' }));
document.querySelector('.cert-next').addEventListener('click', () => certTrack.scrollBy({ left: 260, behavior: 'smooth' }));
document.querySelectorAll('[data-cert]').forEach(card => card.addEventListener('click', () => {
  const item = certificateData[Number(card.dataset.cert)];
  if (!item) return;
  const image = document.getElementById('certificate-full-image');
  image.src = assetUrl(item.src); image.dataset.index = card.dataset.cert; image.alt = item.title[currentLang];
  document.getElementById('certificate-full-caption').textContent = item.title[currentLang];
  certificateDialog.showModal(); document.body.classList.add('dialog-open');
}));

// Close dialogs and restore page scroll.
document.querySelectorAll('.dialog-close').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
[serviceDialog, certificateDialog].forEach(dialog => {
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { if (![serviceDialog, certificateDialog].some(item => item.open)) document.body.classList.remove('dialog-open'); });
});

// Custom booking request. Booksy is used only as the external review source.
const dateInput = document.getElementById('booking-date');
const now = new Date();
dateInput.min = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('-');
let preparedRequest = '';
function selectedServiceLabel(value) {
  if (value.startsWith('massage:')) return text(getService(value.slice(8))?.name);
  if (value.startsWith('yoga:')) return text(yogaServices.find(item => item.id === value.slice(5))?.name);
  return '';
}
function selectedDurationAndPrice(data) {
  const item = selectedBookingItem();
  if (!item.service) return { duration: '', price: '' };
  const index = Number(data.get('duration') || 0);
  if (item.kind === 'massage') {
    const variant = item.service.variants[index];
    return { duration: variant ? variantLabel(variant) : t('byArrangement'), price: variant?.price == null ? t('pricePending') : formatPrice(variant.price) };
  }
  return { duration: text(item.service.duration), price: currentLang === 'pl' ? item.service.price : item.service.priceRu };
}
function prepareRequest(data) {
  const labels = currentLang === 'pl'
    ? ['Dzień dobry, chciałabym umówić wizytę.', 'Usługa', 'Wariant i czas', 'Cena', 'Preferowany dzień', 'Preferowana godzina', 'Imię', 'Telefon', 'Wiadomość']
    : ['Здравствуйте, хочу записаться на встречу.', 'Услуга', 'Вариант и длительность', 'Стоимость', 'Желаемый день', 'Предпочтительное время', 'Имя', 'Телефон', 'Сообщение'];
  const option = selectedDurationAndPrice(data);
  const rows = [labels[0], `${labels[1]}: ${selectedServiceLabel(data.get('service'))}`, `${labels[2]}: ${option.duration}`, `${labels[3]}: ${option.price}`, `${labels[4]}: ${data.get('date')}`, `${labels[5]}: ${data.get('time')}`, `${labels[6]}: ${data.get('name')}`, `${labels[7]}: ${data.get('phone')}`];
  if (data.get('message')) rows.push(`${labels[8]}: ${data.get('message')}`);
  return rows.join('\n');
}
async function copyRequest() {
  try {
    await navigator.clipboard.writeText(preparedRequest);
    document.querySelector('[data-copy-request]').textContent = t('copied');
  } catch {
    const temporary = document.createElement('textarea'); temporary.value = preparedRequest; temporary.style.position = 'fixed'; temporary.style.opacity = '0'; document.body.appendChild(temporary); temporary.select();
    try { document.execCommand('copy'); document.querySelector('[data-copy-request]').textContent = t('copied'); }
    catch { document.querySelector('[data-copy-request]').textContent = t('copyRequest'); }
    temporary.remove();
  }
}
document.getElementById('booking-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  preparedRequest = prepareRequest(data);
  const result = document.getElementById('form-result');
  const whatsappUrl = `https://wa.me/48786408686?text=${encodeURIComponent(preparedRequest)}`;
  result.hidden = false;
  result.innerHTML = `<p>${t('formSuccess')}</p><div class="result-actions"><a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">${t('openWhatsAppButton')}</a><button type="button" data-copy-request>${t('copyRequest')}</button></div>`;
  result.querySelector('[data-copy-request]').addEventListener('click', copyRequest);
  result.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest' });
});

document.getElementById('year').textContent = new Date().getFullYear();
renderServices(); renderYoga(); renderServiceSelect(); observeReveal();
