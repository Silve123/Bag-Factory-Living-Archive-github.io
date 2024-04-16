document.addEventListener('DOMContentLoaded', function () {
    addAreaHandlers();
});
const studiosHistory = {
    "Studio 1": [
        "1992 : Deborah Bell",
        "1994-2005 : Kay Hassan",
        "2006-2009 : Dinkies Sithole",
        "2010-2011 : Lerato Shadi",
        "2012 : Pamela Sunstrum",
        "2018 : Thonton Kabeya"
    ],
    "Studio 2": [
        "1992 : Penny Siopis",
        "1993 : Colin Richards",
        "1994 : Marlene Kapitche Meyer",
        "1996 : Moleleki Frank Ledimo",
        "1997 : Sam Nhlengethwa",
        "1998-2005 : Dominic Tshabangu",
        "2008-2009 : Nontsikilelo Veleko",
        "2005-2012 : Richard Penn"
    ],
    "Studio 3": [
        "1991-2019 : David Koloane",
        "2020 : Yolanda Mazwana"
    ],
    "Studio 4": [
        "1991-2022 : Pat Mautloa & Bongi Dhlomo"
    ],
    "Studio 5": [
        "1991-1994 : Sam Nhlengethwa",
        "1995 : Anna Varney",
        "1996-2007 : Stephen Maqashela",
        "2008 : Happy Dhlame",
        "2010-2012 : Happy Dhlame",
        "2015-2017 : Ayanda Mabulu",
        "2018-2020 : Phumulani Ntuli"
    ],
    "Studio 6": [
        "1992 : Anna Varney",
        "1995 : Hedwig Barry",
        "1997-1998 : Basil Baqwa",
        "2002 : Amos Letsoalo",
        "2004-2007 : Andrew Tshabangu",
        "2008-2009 : Sabelo Mlangeni",
        "2010-2011 : Reg Pakari",
        "2012 : Blessing Ngobeni",
        "2015-2018 : Danny Myburgh",
        "2019-2020 : Candice Kramer"
    ],
    "Studio 7": [
        "1992 : Belinda Blignaut",
        "1993-1995 : Nikki Blumenfeldt",
        "1996-1998 : Sam Nhlengethwa",
        "1999-2000 : Senzeni Marasela",
        "2001 : Claudia Schreuders",
        "2011 : Colbert Mashile",
        "2012-2013 : Musa Nxumalo",
        "2017 : Levester Williams",
        "2018-2019 : Asuka Nirasawa"
    ],
    "Studio 8": [
        "1992 : Sophia Ainslie",
        "1995 : Alan Alborough",
        "1996-2006 : Ben Arnold",
        "2010 : Petros Ghebrehiwot",
        "2016-2020 : Bev Butkow"
    ],
    "Studio 9": [
        "1992 : Isolde Krams",
        "1995 : Kendell Geers",
        "1996 : Belinda Blignaut",
        "1997 : Hentie vd Merwe",
        "1999-2009 : Bongi Bengu",
        "2012 : Tshepo Mosopa",
        "2015-2017 : Blessing Ngobeni",
        "2018 : Zen Marie",
        "2020 : Olivia Botha & Neville Starling"
    ],
    "Studio 10": [
        "1992 : Cyril Manganyi",
        "1998-2002 : Tamar Mason",
        "2004-2020 : Diana Hyslop"
    ],
    "Studio 11": [
        "1992-1994 : Monica von Molte",
        "1995-1996 : Durant Sihlale",
        "1997 : Wayne Barker",
        "1999-2000 : Fatima Fernandes",
        "2001-2004 : Paul Emmanuel",
        "2005-2009 : Johan Thom",
        "2010-2011 : Meyer Taub",
        "2015-2019 : Asanda Kupa",
        "2020 : Malebona Maphutse" 
    ],
    "Studio 12": [
        "1997 : Samson Mnisi",
        "2012 : Fidel Regueros",
        "2017-2018 : Tshepo Masopa",
        "2019-2020 : Richard Specs Ndimande"
    ],
    "Studio 13": [
        "1992-1996 : Nikki Blumenfeldt & Helen Sibidi & Philani Mhlungu",
        "1997-1999 : Bongi Dhlomo",
        "2012-2020 : Gail Behrmann"
    ],
    "Studio 14": [
        "1992 : Agrippa Nhlapo",
        "2009 : Churchill Madikida",
        "2010 : Mary Wafer",
        "2011-2015 : Benon Lutaaya",
        "2016-2019 : Usha Seejarim",
        "2020 : Ross Passmoor"
    ],
    "Studio 15": [
        "1996 : Ezrom Legae",
        "1997-2007 : Rookeya Gardee",
        "2009-2013 : Thenjiwe Nkosi",
        "2015-2019 : Thonton Kabeya",
        "2020 : Sandile Radebe"
    ],
    "Studio 16": [
        "1991 : Thomas Nkuna",
        "1992 : Gillian Solomon",
        "2002-2005 : Verna Jooste",
        "2007-2009 : Tracey Rose & Athi Patra Rega",
        "2010 : Ricky Burnet",
        "2011-2012 : Iris Dawn Parker",
        "2015-2017 : Benon Lutaaya",
        "2018 : Ramarutha Makoba",
        "2019 : Olivia Botha",
        "2020 : Dathini Mzayiya"
    ],
    "Studio 17": [
        "1991-2006 : Joachim Schoenfeldt",
        "2008-2011 : Nadine Hutton",
        "2015-2017 : Tshepo Masopa",
        "2018 : Richard Specs Ndimande"
    ]
}

function addAreaHandlers() {
    var areas = document.querySelectorAll('map[name="workmap"] area');
    var tooltip = document.getElementById('tooltip');
    var studioHistoryData = document.querySelector('.studio-history-data');

    areas.forEach(function (area) {
        area.addEventListener("click", function() {
            displayStudioHistory(area.alt, studioHistoryData);
        });

        area.addEventListener("mouseover", function (e) {
            displayStudioHistory(area.alt, studioHistoryData);
        });

        area.addEventListener("mouseout", function () {
            displayStudioHistory('Studio 0', studioHistoryData)
            hideTooltip();
        });
    });

    function showTooltip(event, altText) {
        tooltip.style.display = 'block';
        tooltip.innerHTML = altText;
        tooltip.style.top = event.pageY + 'px';
        tooltip.style.left = event.pageX + 'px';
    }

    function hideTooltip() {
        tooltip.style.display = 'none';
    }

    function displayStudioHistory(studioName, studioHistoryData) {
        if (studiosHistory.hasOwnProperty(studioName)) {
            var studioHistoryList = document.createElement('ul');
            studiosHistory[studioName].forEach(function (historyItem) {
                var listItem = document.createElement('li');
                listItem.textContent = historyItem;
                studioHistoryList.appendChild(listItem);
            });
            studioHistoryData.innerHTML = ''; 
            studioHistoryData.appendChild(studioHistoryList);
        } else {
            studioHistoryData.innerHTML = '<ul><li>No history available</li></ul>';
        }
    }
}