# js-quiz
Jest to projekt dla uczestniczek girls-js. Uczymy się korzystać z Gita i GitHuba, tworząc wspólnie prostą aplikację, jaką jest quiz w JavaScripcie.

## Jak korzystać z tego repozytorium i dodawać do niego swoje fragmenty kodu:

### 1. Fork
W prawym górnym rogu tego ekranu znajduje się przycisk **Fork**. Użyj go a kopia tego repozytorium pojawi się na Twoim koncie GitHub.

### 2. Clone
W repozytorium na swoim koncie GitHub, które powstało przed chwilą, poszukaj przycisku **clone or download**. W modalu jest adres Twojego repozytorium - skopiuj go. Teraz otwórz terminal i nawiguj do dowolnego folderu uzywając komend `cd ..` (katalog w górę) i `cd jakiś-katalog`.
Tam napisz `git clone` i po spacji wklej adres zdalnego (czyli swojego na GitHubie) repozytorium. Zostanie ono sklonowane na Twój komputer, do nowego katalogu, który utworzy się sam podczas klonowania. Czyli będzie to wyglądało mniej więcej tak:
>git clone https://github.com/twoje-konto/js-quiz.git

## 3. (Albo Pull)
Jeśli jest to Twoje kolejne zadanie, najpierw pobierz najnowsze zmiany z naszego wspólnego repozytorium, ponieważ od czasu gdy je sobie klonowałaś ktoś mógł juz coś dodać.
Przy pracy z forkiem (czyli to, co my robimy), git musi ogarniać 3 repozytoria: lokalne na naszym komputerze, zdalne na naszym koncie GitHub i zdalne wspólne czyli to z którego forkowałyśmy.
Przez polecenie 
>git remote -v 

możemy dowiedzieć się, jakie mamy ustawione zdalne repozytoria. Tradycja githuba mówi, że **origin** to repozytorium nasze własne, z którego klonowałyśmy a **upstream** to repozytorium wspólne (z którego forkowałyśmy).

Origin tworzy się automatycznie przy klonowaniu, musimy więc jeszcze ustawić upstream pisząc: 
>git remote add upstream git@github.com:user/project.git (tu wstawię adres repo girls.js)

Żeby pobrać najświeższe zmiany, użyj komendy:
>git pull upstream 

Pobieraj zmiany zawsze przed rozpoczęciem nowego zadania.

## 3. Issue
W naszym wspólnym repozytorium na GitHubie ([girlsjs/zadania-quiz](https://github.com/girlsjs/zadanie-quiz) jest zakładka Issues. Wybierz zadanie dla siebie i przypisz się do niego (assign to me). Jeśli masz pytania - zadaj je w komentarzu pod zadaniem.
W swoim ulubionym edytorze otwórz sklonowane repozytorium (znajdujesz się na branchu master) i utwórz nowy branch o nazwie `issue-tuWstawićNrIssue`, np `issue-1`. Mozesz do tego uzyć narzędzi w edytorze albo napisać w terminalu: 
> git checkout -b issue-1

Na tym branchu wykonaj wybrane przez Ciebie zadanie.

## 4. Commit
Oprócz zwykłego zapisywania zmian od czasu do czasu wykonuj commit, uzywając narzedzi w edytorze albo pisząc w terminalu najpierw 
> git add . 

a następnie: 
>git commit -m "tu commit message czyli kilka słów, czego dotyczyła zmiana, np add padding"

## 5. Push
Teraz mozesz wysłać zmiany na swój github. W terminalu piszemy (pierwszy push dla danego brancha robimy z opcją `-u`, żeby połączyć go z branchem zdalnym ):
>git push -u origin issue-1

W kolejnych pushach pomijamy `-u`. 

## Pull request
Zaloguj się na github do swojego konta i wejdź do repozytorium, do którego właśnie coś dodałaś. Jest tam przycisk **new pull request**, kltóry po kliknięciu przeniesie Cię na stronę naszego wspólnego repozytorium. Na górze są opcje, co z czym porównujemy. **Base repository** jest docelowe, **head repository** jest Twoje. Jako compare wybierz branch, na którym pracowałaś, jako base branch - master. Następnie użyj przycisku **create pull request** (możesz dodać komentarz jeśli chcesz). 

## Code review
Ktoś z nas przeczyta Twoje zmiany i ustosunkuje się do nich w komentarzach. Możesz na te komentarze odpowiadać, pytać itd. Często konieczne są jednak poprawki. Zrób je na tym samym branchu, nie zapominając o commit. Następnie: 
> git push origin issue-1

Twój pull request zaktualizuje się sam i więc może być ponownie czytany. 

## Merge
Jeśli nie będzie już żadnych zastrzeżeń i ostateczna wersja zostanie uzgodniona, Twój kod zostanie scalony (merge) ze wspólnym repozytorium. To jest koniec zadania!





