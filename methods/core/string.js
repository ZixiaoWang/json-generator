'use strict';

// String
const _lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet tincidunt elit. Nunc id tortor eget augue finibus vulputate. Suspendisse dignissim, dolor quis ullamcorper sagittis, mauris ante iaculis ante, eu congue sem ante sed velit. Fusce condimentum molestie nunc, vel ultrices metus faucibus eget. Fusce quis tristique risus. Maecenas eleifend tempor ipsum eu dignissim. Aliquam commodo enim non aliquet ullamcorper. Sed eget dolor a augue rhoncus tincidunt. Curabitur urna mi, porta nec arcu et, suscipit euismod ipsum. Nullam et aliquet sem. Aliquam hendrerit, urna ac eleifend facilisis, mauris nisi tincidunt neque, eget aliquam nulla elit ac mauris. Sed et elit fringilla, faucibus eros et, interdum dui. Sed sed ultricies velit. Maecenas iaculis magna nec nunc commodo feugiat. Curabitur et mattis ex. Vivamus at placerat nisl, vel mollis ipsum. Nunc elementum euismod lacus, eu condimentum magna luctus sed. Proin pharetra varius mauris, at maximus lorem. In ut varius nibh, eget lacinia massa. Nam eget mollis eros. In hac habitasse platea dictumst. Sed elementum arcu vel blandit blandit. Proin tincidunt est ac quam luctus, ut commodo sapien molestie. Fusce mollis urna sit amet odio iaculis, eget tincidunt purus efficitur. Vestibulum quis mi dolor. Sed sollicitudin iaculis ipsum vel ullamcorper. Integer a dignissim velit, quis maximus nibh. Aliquam vel ligula at nunc sollicitudin tincidunt. Nunc purus odio, elementum quis sapien nec, molestie aliquam quam. Aenean volutpat ante quis quam aliquet, eu cursus dui volutpat. Suspendisse eu dui dignissim, imperdiet magna quis, imperdiet velit. Fusce a ex facilisis, sagittis turpis ut, faucibus purus. Ut ut lectus a dolor tempus semper euismod vitae ipsum. Donec gravida diam ac sapien feugiat, eget pharetra neque egestas. Quisque non diam et diam cursus fringilla. Fusce eros est, fermentum id odio id, rhoncus viverra turpis. Curabitur lacinia neque sed elit rhoncus euismod ac in massa. Fusce vitae eros in dolor tempus tristique. Maecenas magna magna, facilisis sed lectus a, tempor efficitur velit. Maecenas et viverra quam. Aenean ac scelerisque diam, gravida ullamcorper erat. Duis eget ex nisi. Donec placerat ipsum magna, id imperdiet augue pharetra et. Proin maximus eget purus vitae tempor. Sed at magna magna. Suspendisse sed lectus eleifend dui tempus aliquam luctus convallis nulla. Aenean vitae sollicitudin tellus. Vestibulum bibendum urna quam, quis rhoncus felis finibus vel. Proin faucibus purus ligula, ac ullamcorper tortor tempus sit amet. Mauris interdum augue orci, in suscipit elit maximus ut. Praesent id leo a erat molestie dignissim eu ut ligula. Quisque tempus massa ac lectus vehicula, a dapibus risus efficitur. Maecenas quis nibh in risus vehicula congue. Suspendisse a mi sed lacus commodo elementum ac facilisis sapien. Cras et purus et velit pulvinar vehicula.';

// Name
const boysNameList = ["Todd Mcquiggan", "Rosario Kealoha", "Raul Hills", "Juan Cordle", "Fausto Eynon", "Carl Arriaga", "King Voorhis", "Werner Bolinger", "Stevie Friddle", "Jeromy Schill", "Nolan Doby", "Kurtis Auclair", "Ronald Langner", "Hilario Ewin", "David Lohr", "Pablo Basler", "Sidney Stoneman", "Rudolf Steinmetz", "Erick Zucker", "Faustino Chica", "Dewitt Tulloch", "Martin Leatham", "Willard Pemberton", "Benton Sites", "Roland Spies", "Arnold Madlock", "Porter Speller", "Otis Aylesworth", "Humberto Vivier", "Avery Ripple", "Chadwick Kilbourn", "Porfirio Fazzino", "Noel Laury", "Orval Macgillivray", "Bobbie Sorensen", "Davis Ebel", "Dominick Isaman", "Timmy Smtih", "Cyrus Ausmus", "Harry Clingerman", "Gavin Crown", "Domenic Edler", "Scotty Gullo", "Heath Negus", "Greg Korman", "Elvis Bath", "Clinton Ouimet", "Basil Mcgreevy", "Galen Struthers", "Foster Loken"];
const girlsNameList = ["Cecily Ashbaugh", "Sheilah Deguzman", "Elma Baisley", "Latasha Laber", "Dennise Seamon", "Pearlene Burnam", "Pennie Basden", "Jacklyn Gough", "Janice Micco", "Fatima Beverly", "Karima Pulido", "Kandra Neuman", "Katelyn Bresler", "Eliz Ordaz", "Gwyneth Price", "Celestine Deacon", "Liza Harrold", "Lasonya Laskey", "Dorthy Dahlberg", "Bong Whitmer", "Sharlene Kean", "Cayla Sabat", "Madonna Rutz", "Ossie Buchta", "Dollie Scheu", "Jerica Kensey", "Reynalda Caverly", "Maris Pavone", "Viola Atchinson", "Annelle Tew", "Cinda Michaux", "Noelle Doke", "Christina Shoffner", "Verona Burkle", "Ulrike Francia", "Lauri Haddon", "Nidia Jessie", "Karen Killough", "Jesusa Storlie", "Hassie Alverez", "Eugena Mcwilliams", "Agustina Marie", "China Henriksen", "Stephine Stanley", "Chasidy Biros", "Marlys Lenoir", "Lakia Bavaro", "Mayola Oser", "Colleen Kindel", "Sallie Arrington"
];

// Countries and areas
const countryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic (CAR)", "Chad", "Chile", "China", "Colombia", "Comoros", "Democratic Republic of the Congo", "Republic of the Congo", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia (FYROM)", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates (UAE)", "United Kingdom (UK)", "United States of America (USA)", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City (Holy See)", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
const districtList = ["Central and Western","Eastern","Southern","Wan Chai","Sham Shui Po","Kowloon City","Kwun Tong","Wong Tai Sin","Yau Tsim Mong","Islands","Kwai Tsing","North","Sai Kung","Sha Tin","Tai Po","Tsuen Wan","Tuen Mun","Yuen Long"];
const streetList = ["Tseung Kwan O - Lam Tin Tunnel","A Kung Ngam Road","A Kung Ngam Village Road","Aberdeen Reservoir Road","Albany Road","Albert Path","Aldrich Bay Road","Aldrich Street","Ap Lei Chau Bridge Road","Ap Lei Chau Drive","Ap Lei Chau Praya Drive","Arsenal Street","Barker Road","Beach Road","Bel-air Avenue","Bel-air Rise","Big Wave Bay Road","Bisney Road","Black's Link","Bluff Path","Boat Street","Borrett Road","Bowen Drive","Boyce Road","Braemar Hill Road","Brewin Path","Briar Avenue","Broadwood Road","Broom Road","Brown Street","Bullock Lane","Burd Street","Burrows Street","Cadogan Street","Cheung Man Road","Cleveland Street","Cross Street","Cyberport Road","Deep Water Bay Road","Fortress Hill Road","Gilman's Bazaar","Gordon Road","Gough Hill Road","Harbour Parade","Hing Hon Road","Hong Man Street","Hong On Street","Hong Shing Street","Hornsey Road","Hospital Road","Island Road","Ka Wai Man Road","Ka Yip Street","Kennedy Town Praya","King Wah Road","Ko Shing Street","Kornhill Road","Lambeth Walk","Lok Man Road","Luard Road","Lung Wui Road","Lyttleton Road","Mallory Street","Man Cheung Street","Man Kwong Street","Man Po Road","Man Yiu Street","Mosque Junction","Mount Austin Road","Mount Butler Drive","Mount Davis Road","Mount Kellett Road","Nam Fung Road","Ning Yrung Terrace","Northcote Close","Oaklands Road","Oi Lai Street","Oi Yin Street","Old Peak Road","Park Road","Peak Road","Pollock's Path","Repulse Bay Road","Saigon Street","Saint Joseph Terrace","Sands Street","Seymour Road","Seymour Terrace","Sharp Street","Sheung On Street","Shing Tai Road","Shun Tai Road","Siu Fai Terrace","Siu Sai Wan Road","Sun Yip Street","Tai Koo Shing Road","Tai Koo Wan Road","Tai Man Road","Tai Mou Avenue","Tim Wa Avenue","Tin Wan Praya Road","Tung Hei Road","Tung Street","West End Terrace","Westland Road","Wing Tai Road","Wong Nai Chung Gap Road","Wun Sha Street","Yuen Yuen Street","Alnwick Road","Ashley Road","Bowring Street","Bristol Avenue","Bulkeley Street","Chatham Court","Cheong Tung Road","Cheung Sha Wan Road","Ching Cheung Road","Choi Wan Road","Choi Ha Road","Chun Wah Road","Chung Hau Street","College Road","Dorset Crescent","Duke Street","Ede Road","Essex Crescent","Fat Kwong Street","Ferry Street","Gateway Road","Gillies Avenue South","Gillies Avenue North","Hereford Road","Hillwood Road","Hing Wah Street","Hip Wo Street","Hiu Kwong Street","Hong Ning Road","Ho Tung Road","Humphreys Avenue","Hung Hom Bypass","Hung Hom Road","Kai Cheung Road","Kai Fuk Road","Kansu Street","Kei Lung Street","Kowloon City Road","Kowloon Park Drive","Kwun Chung Street","Luen Wan Street","Ma Tau Chung Road","Ma Tau Kok Road","Ma Tau Wai Road","Maidstone Road","Market Street (Hong Kong)","Mong Kok Road","Nam Cheong Street","Nanking Street","Ngau Tau Kok Road","Pilgrim's Way","Prat Avenue","Scout Path","Tai Hang Tung Road","Tai Hang West Street","Wai Yip Street","Wang Chiu Road","Wang Kwong Road","Woh Chai Street","Woosung Street","Wuhu Street","Yim Po Fong Street","Ying Wa Street","Yu Chau Street","Ching Cheung Road","Fan Kam Road","Lam Kam Road","San Sham Road","Pik Fung Road","Joint Street","King Cho Road","Lai Chi Ling Road","Lai Cho Road","Lai King Hill Road","Lim Cho Street","Kwong Fuk Road","Tai Po-Tai Wo Road","Ting Kok Road","Yuen Shin Road","Ching Hong Road","Chung Mei Road","Fung Shue Wo Road","Tam Kon Shan Road","Tsing Yi Road","Tsing Yi Road West","Lung Mun Road","Ming Kum Road","Sam Shing Street","Tsing Tin Road","Tsing Wun Road","Tuen Mun Heung Sze Wui Road","Wong Chu Road","Wu King Road","Wu Shan Road","Pui To Road","A Kung Kok Street","Che Kung Miu Road","Fo Tan Road","Hung Mui Kuk Road","Kam Ying Road","Mei Tin Road","On Chun Street","On Yuen Street","On Luk Street","Sai Sha Road","Sha On Street","Sha Tin Tau Road","Tai Chung Kiu Road","Tin Sam Street","Yuen Wo Road","Kam Sheung Road","Kam Tin Road","Wan Po Road","Airport Road","Airport Expo Boulevard","Catering Road West","Catering Road Central","Catering Road East","Chek Lap Kok South Road","Cheong Hing Road","Cheong Hong Road","Cheong King Road","Cheong Lin Path","Cheong Lin Road","Cheong Shun Road","Cheong Tat Road","Cheong Wing Road","Cheong Wong Road","Cheong Yip Road","Chung Cheung Road","Kwo Lo Wan Road","North Perimeter Road","Runway Road South","Sky City Road","Sky Plaza Drive","Sky Plaza Road","Pak Sha Praya Road","Pak Shue Street","Peak Road","Sun Hing Street","Tung Wa Road","Afghanistan","Bahrain","Bangladesh","Bhutan","Brunei","Cambodia","East Timor (Timor-Leste)","Egypt","Georgia","India","Indonesia","Japan","Jordan","Kyrgyzstan","Laos","Lebanon","Malaysia","Maldives","Mongolia","Myanmar","Nepal","Oman","Qatar","Saudi Arabia","Singapore","Sri Lanka","Syria","Tajikistan","Turkmenistan","United Arab Emirates","Uzbekistan","Vietnam","Yemen","Abkhazia","Nagorno-Karabakh","Northern Cyprus","Palestine","South Ossetia","Taiwan","British Indian Ocean Territory","Christmas Island","Cocos (Keeling) Islands"];


const _loremArr = _lorem.split(/[\s\,\.]+/);
const _loremLength = _loremArr.length;

function randomNum(length, start){
    let _start = 0;
    if(start){
        _start += start;
    }
    return Math.floor( Math.random()*length+_start );
}


function getWord(num){
    let _strArr = [];
    let _num = 1;
    if(typeof num === 'number' && num >= 0){ _num = num; }
    for(let i=0; i<_num; i++){
        _strArr.push(  _loremArr[randomNum(_loremLength)]  );
    }
    return _strArr.join(' ');
}

function getName(options){
    let _options = Object.assign({
        gender:'both'  
    }, options);
    if( /^(m|M)(a|A)(l|L)(e|E)$/.test(_options.gender) ){
        return boysNameList[ randomNum(50) ];
    }else if( /^(f|F)(e|E)(m|M)(a|A)(l|L)(e|E)$/.test(_options.gender) ){
        return girlsNameList[ randomNum(50) ];
    }else{
        return boysNameList.concat(girlsNameList)[ randomNum(100) ];
    }
}

function getCountry(){
    return countryList[ randomNum(countryList.length) ];
}

function getDistrict(){
    return districtList[ randomNum(districtList.length) ];
}

function getStreet(){
    return streetList[ randomNum(streetList.length) ];
}

function getAddress(){
    let _address = [ randomNum(300), getStreet(), getDistrict(), getCountry() ];
    return _address.join(', ');
}

function randomlyPickOne(){
    let args = arguments;
    if(args && args.length === 0){   return null;    }
    return args[ randomNum(args.length) ];
}

module.exports = function(){
    return {
        getWord: getWord,
        getName: getName,
        getCountry: getCountry,
        getDistrict: getDistrict,
        getStreet: getStreet,
        getAddress: getAddress,
        randomlyPickOne: randomlyPickOne
    };
};