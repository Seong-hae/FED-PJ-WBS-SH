// 갤러리 컴포넌트 사용 데이터 - gellery.js

// 메인 갤러리영역과, 갤러리페이지 스와이퍼 데이터
const gallery_data = [
    {
        idx : "1",
        galsrc:"./images/gallery/gallery1.jpg",
        galname: `성립 개인전 「파도의 조각들」 展`,
        galperiod: `6.1(목) ~ 6.25(일)`,
        galdate: `평일/주말 10:30 - 19:00`,
        galstore: "2F 롯데갤러리",
        galauthor: "성립",
    },
    {
        idx : "2",
        galsrc:"./images/gallery/gallery2.jpg",
        galname: `필독(Feeldog) 개인전 Cake for your_Home Made`,
        galperiod: `6.23(금) ~ 8.27(일)`,
        galdate: `평일/주말 10:30~19:00`,
        galstore: "아쿠아몰 10F 롯데갤러리",
        galauthor: "필독(Feeldog)",
    },
    {
        idx : "3",
        galsrc:"./images/gallery/gallery3.jpg",
        galname: `김윤섭 개인전, The Wanderer 展`,
        galperiod: `6.1(목) ~ 8.17(목)`,
        galdate: `평일 10:30 ~ 20:00, 주말/공휴일 10:30 ~ 21:00`,
        galstore: "롯데백화점 본점 에비뉴엘관 B2-4F 아트월",
        galauthor: "김윤섭",
    },
    {
        idx : "4",
        galsrc:"./images/gallery/gallery4.jpg",
        galname: `NeighborHOOD 展`,
        galperiod: `6.20(화) ~ 8.20(일)`,
        galdate: `평일/주말 10:30-19:00`,
        galstore: "롯데백화점 인천점 5F 롯데갤러리",
        galauthor: "김건주, 드로잉메리, 이슬로, 275c, 스테파니 미초바",
    },
    {
        idx : "5",
        galsrc:"./images/gallery/gallery5.jpg",
        galname: `권오상 AIR MASS : 바람이 다니는 길 展`,
        galperiod: `5.12(금) ~ 7.16(일)`,
        galdate: `매일 10:30 ~ 19:00`,
        galstore: "롯데백화점 잠실점 에비뉴엘 6F 아트홀",
        galauthor: "권오상",
    },
    {
        idx : "6",
        galsrc:"./images/gallery/gallery6.jpg",
        galname: `롯데갤러리 광주 신진 큐레이터 공모 수상 전시 - 보물찾기: 빼앗긴 호기심을 찾아서`,
        galperiod: `3.28(화) ~ 6.27(화)`,
        galdate: `평일/주말 : 10:30~20:00`,
        galstore: "롯데백화점 광주점 11F 롯데갤러리",
        galauthor: "권윤지 김은경 박성수 임송은 임수범",
    },
    
];



const gallery_product_data = [
    {
        idx : "1",
        gprosrc:"./images/gallery/gallery_product1.png",
        gproname: `지비지 인 월드`,
        gproauthor: "지비지",
        gproprice: `18,000,000원`,
        gproexplanation: `
        재현과 상상력의 적절한 조화로 작업하는 지비지의 작품에는 현대인의 일상이 덤덤하게 펼쳐져 있다. 강렬한 원색과 만화 같은 라인들이 어린아이의 낙서처럼 보이지만, 악가와 미술가로서의 내적 갈등이 해소된 이후부터 작품은 인간의 원초적인 감정과 동심에서 져 올린 본연의 자연성으로 나아가고 있다. 원초적인 자유와 순수한 감성의 인물 미감은 자연환경과의 상호작용 속에서 작업 스타일을 견고히 하고, 작업에 필요한 내러티브(인물 스토리텔링)를 완성하는데 중요한 부분이 되었다. 강렬한 색채와 거침없는 붓 터치, 무질서한 형태 속에서도 밀도 있는 화면구성, 에너지를 내뿜는 작품들은 천진난만한 순수함과 동시에 가면 속에 살 수밖에 없는 현대인의 아픔을 잘 드러낸다.
        `
    },
    {
        idx : "2",
        gprosrc:"./images/gallery/gallery_product2.png",
        gproname: `A Bigger Book : Collector’s Edition`,
        gproauthor: "데이비드 호크니 (David Hockney)",
        gproprice: `7,500,000원`,
        gproexplanation: `
        거대한 책으로 알려진 TASCHEN의 SUMO 사이즈로, 데이비드 호크니의 모노그래프를 담은 책입니다. 호크니의 브레드퍼드 예술 학교의 10대 시절부터 1960년대 신나는 런던(Swinging London) 속 비약적 발전을 이룬 시기, 1970년대 로스앤젤레스의 수영장을 그린 생활과 최근 자화상, iPad로 그린 드로잉 등의 작품들을 모았습니다. 작가의 사인이 담긴 한정판 컬렉터 에디션. A Bigger Book 9,000부는 마크 뉴슨(Marc Newson)의 북스탠드와 함께 제공됩니다.
        `
    },
    {
        idx : "3",
        gprosrc:"./images/gallery/gallery_product3.png",
        gproname: `Luna (Woman)`,
        gproauthor: "정세윤",
        gproprice: `3,500,000원`,
        gproexplanation: `
        정세윤의 작품은 의인화된 동물에 생각을 대입시켜, 인간의 삶과 존재 그리고 현대사회를 풍자하는 내용을 담고 있다. 작품마다 동글동글한 형태, 아기자기한 색감 그리고 동물들의 아리송한 표정이 보여주는 동화적인 요소들은 시각적으로 즐거움과 편안함을 더해준다. 귀여운 동물들이 작품 속의 주인공이 되므로, 작품을 통해 말하고자 하는 현대사회의 이야기를 관람객에게 귀엽고 친근하게 다가가 보여준다.
        `
    },

]




export {gallery_data, gallery_product_data};