// 1. 박스 2개 만들기
// 2. 드랍다운 리스트 만들기
// 3. 환율정보 들고오기
// 4. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
// 5. 금액을 입력하면 환전이 된다
// 6. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨
// 7. 숫자를 한국어로 읽는법
// 8. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용이 된다.

let currencyRatio = {
    USD : {
        KRW : 1184.36,
        USD : 1,
        VND : 22972.50,
        unit : "달러"
    },
    KRW : {
        KRW : 1,
        USD : 0.00084,
        VND : 19.40,
        unit : "원"
    },
    VND : {
        KRW : 0.052,
        USD : 0.000044,
        VND : 1,
        unit : "동"
    }
}

// 1. console.log(currencyRatio.VND.unit);

// 2. console.log(currencyRatio["VND"]["unit"]);

document.querySelectorAll("#from-currency-list a").forEach


