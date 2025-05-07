function run(){
    // Names of all tracks
    var tracks = [
        // Road Races
        "Bahía De Plano Circuit", "Dunas Blancas Sprint", "Emerald Circuit", "Descansar Dorado Sprint", "Volcán Sprint", "Horizon Mexico Circuit", "Reservorio Sprint", "Arch of Mulegé Circuit", "Sierra Verde Sprint", "Copper Canyon Sprint", "Llanuras Sprint", "Gran Pantano Sprint", "The Colossus", "The Goliath", "Playa Azul Circuit", "Los Jardines Circuit", "Riviera Sprint", "Chihuahua Circuit", "Tierra Próspera Circuit", "Estadio Circuit", "Lookout Circuit", "Bola Ocho Circuit", "Cathedral Circuit", "Panorámica Sprint", "Plaza Circuit", "Horizon Oval Circuit", "Vista Del Mar Sprint", "Marigold Sprint", "Aeródromo Sprint", "Línea Costera Sprint", "Winter Wonderland Circuit", "Cloverleaf Sprint", "San Juan Sprint", "Valle Del Río Sprint", "Rocosa Sprint", "Horizon Stadium Circuit",

        // Street Races
        "El Lago Blanco", "Ruta Norte", "Castillo Del Mar", "Costa Rocosa", "Festival Gatecrash", "Las Afueras", "Hilltop Descent", "Tunnel Run", "Cañón Run", "Guanajuato Sur", "Horizon Callejera", "Cruce Del Valle", "Las Laderas", "The Marathon", "Coast Run", "Highland Climb", "Carretera Chase", "Bosque Del Sur", "Jungle Descent", "Granjas De Tapalpa", "Wetland Charge",

        // Dirt Races
        "Horizon Baja Scramble", "Baja California Trail", "Caldera Scramble", "Montaña Trail", "Fuera Del Camino Trail", "El Pípila Scramble", "Desierto Trail", "San Juan Scramble", "Mulegé Town Scramble", "Cordillera Trail", "River Scramble", "Tapalpa Trail", "Teotihuacán Scramble", "Cascada Trail", "La Selva Scramble", "Barranca Trail", "Bajío Trail", "The Gauntlet", "Tulum Trail", "Mangrove Scramble",

        // Cross Country Races
        "Baja Cross Country Circuit", "Las Dunas Cross Country", "El Descenso Cross Country", "The Titan", "Ribera Rocosa Cross Country", "Costera Cross Country Circuit", "Festival Cross Country", "Oasis Cross Country", "Airfield Cross Country Circuit", "Las Granjas Cross Country", "Herencia Cross Country Circuit", "Restos Cross Country", "Trópico Cross Country", "Ek' Balam Cross Country Circuit", "Estadio Cross Country Circuit", "Urban Cross Country Circuit", "Copper Canyon Cross Country", "Foto Final Cross Country", "Las Ranas Cross Country", "Costa Este Cross Country",

        // Drag Races
        "Festival Drag Strip", "Aeródromo Drag Strip", "Teotihuacán Drag Strip",

        // Midnight Battles
        "1971 Ford Mustang", "1984 Honda Civic", "2003 Toyota Celica", "2010 Lambo Murciélago",

        // Speed Races
        "Dragon's Fall Speed Circuit", "Waterslide Speed Circuit", "Twin Loop Speed Circuit", "Nexus Speed Circuit", "Canyon's Edge Speed Sprint", "Canyon Loop Speed Sprint", "Canyon Racer Speed Sprint", "Nexus Speed Sprint", "Ram's Head Speed Sprint", "Hot Wheels Goliath",

        // Hazard Races
        "Snow Fields Hazard Circuit", "Forest Falls Hazard Sprint", "Canyon's Drop Hazard Sprint", "Ice Canyon Hazard Sprint", "Forest Gorge Hazard Sprint", "Volcano Pass Hazard Sprint", "Lava Loop Hazard Sprint", "Ice Loop Hazard Sprint",

        // Apex Predators Races
        "Devil's Pass", "El Bosque", "Arzate Sprint", "Quarry Trail", "The Narrows", "Canyon Trail", "La Cantera", "Senda De Montaña", "The Apex Run",

        // Horizon Raptors Races
        "Meridian", "Forest Trail", "Cascada Fuerte", "Three Hills", "Lago Azulado", "Rugged Dunes", "Desert Scramble", "Tres Colinas", "Raptor Race!", "Horizon Badlans Goliath",

        // Grit Reapers Races
        "Reserva Del Carrizo", "Valle De Pozas", "Tierras Verdes", "Palm Forest", "Switchback Run", "Joya Marron", "Orogrande", "Cráteres Secos", "Desafío"
    ];

    // Track preview links
    var images = [
        // Road Races
        "url(Track\\ Previews/bahiadeplanocircuit.webp)", "url(Track\\ Previews/dunasblancassprint.webp)", "url(Track\\ Previews/emeraldcircuit.webp)", "url(Track\\ Previews/descansardoradosprint.webp)", "url(Track\\ Previews/volcansprint.webp)", "url(Track\\ Previews/horizonmexicocircuit.webp)", "url(Track\\ Previews/reservoriosprint.webp)", "url(Track\\ Previews/archofmulegecircuit.webp)", "url(Track\\ Previews/sierraverdesprint.webp)", "url(Track\\ Previews/coppercanyonsprint.webp)", "url(Track\\ Previews/llanurassprint.webp)", "url(Track\\ Previews/granpantanosprint.webp)", "url(Track\\ Previews/thecolossus.webp)", "url(Track\\ Previews/thegoliath.webp)", "url(Track\\ Previews/playaazulcircuit.webp)", "url(Track\\ Previews/losjardinescircuit.webp)", "url(Track\\ Previews/rivierasprint.webp)", "url(Track\\ Previews/chihuahuacircuit.webp)", "url(Track\\ Previews/tierraprosperacircuit.webp)", "url(Track\\ Previews/estadiocircuit.webp)", "url(Track\\ Previews/lookoutcircuit.webp)", "url(Track\\ Previews/bolaochocircuit.webp)", "url(Track\\ Previews/cathedralcircuit.webp)", "url(Track\\ Previews/panoramicasprint.webp)", "url(Track\\ Previews/plazacircuit.webp)", "url(Track\\ Previews/horizonovalcircuit.webp)", "url(Track\\ Previews/vistadelmarsprint.webp)", "url(Track\\ Previews/marigoldsprint.webp)", "url(Track\\ Previews/aerodromosprint.webp)", "url(Track\\ Previews/lineacosterasprint.webp)", "url(Track\\ Previews/winterwonderlandcircuit.webp)", "url(Track\\ Previews/cloverleafsprint.webp)", "url(Track\\ Previews/sanjuansprint.webp)", "url(Track\\ Previews/valledelriosprint.webp)", "url(Track\\ Previews/rocosasprint.webp)", "url(Track\\ Previews/horizonstadiumcircuit.webp)",

        // Street Races
        "url(Track\\ Previews/ellagoblanco.webp)", "url(Track\\ Previews/rutanorte.webp)", "url(Track\\ Previews/castillodelmar.webp)", "url(Track\\ Previews/costarocosa.webp)", "url(Track\\ Previews/festivalgatecrash.webp)", "url(Track\\ Previews/lasafueras.webp)", "url(Track\\ Previews/hilltopdescent.webp)", "url(Track\\ Previews/tunnelrun.webp)", "url(Track\\ Previews/canonrun.webp)", "url(Track\\ Previews/guanajuatosur.webp)", "url(Track\\ Previews/horizoncallejera.webp)", "url(Track\\ Previews/crucedelvalle.webp)", "url(Track\\ Previews/lasladeras.webp)", "url(Track\\ Previews/themarathon.webp)", "url(Track\\ Previews/coastrun.webp)", "url(Track\\ Previews/highlandclimb.webp)", "url(Track\\ Previews/carreterachase.webp)", "url(Track\\ Previews/bosquedelsur.webp)", "url(Track\\ Previews/jungledescent.webp)", "url(Track\\ Previews/granjasdetapalpa.webp)", "url(Track\\ Previews/wetlandcharge.webp)",

        // Dirt Races
        "url(Track\\ Previews/horizonbajascramble.webp)", "url(Track\\ Previews/bajacaliforniatrail.webp)", "url(Track\\ Previews/calderascramble.webp)", "url(Track\\ Previews/montanatrail.webp)", "url(Track\\ Previews/fueradelcaminotrail.webp)", "url(Track\\ Previews/elpipilascramble.webp)", "url(Track\\ Previews/desiertotrail.webp)", "url(Track\\ Previews/sanjuanscramble.webp)", "url(Track\\ Previews/mulegetownscramble.webp)", "url(Track\\ Previews/cordilleratrail.webp)", "url(Track\\ Previews/riverscramble.webp)", "url(Track\\ Previews/tapalpatrail.webp)", "url(Track\\ Previews/teotihuacanscramble.webp)", "url(Track\\ Previews/cascadatrail.webp)", "url(Track\\ Previews/laselvascramble.webp)", "url(Track\\ Previews/barrancatrail.webp)", "url(Track\\ Previews/bajiotrail.webp)", "url(Track\\ Previews/thegauntlet.webp)", "url(Track\\ Previews/tulumtrail.webp)", "url(Track\\ Previews/mangrovescramble.webp)",

        // Cross Country Races
        "url(Track\\ Previews/bajacrosscountrycircuit.webp)", "url(Track\\ Previews/lasdunascrosscountry.webp)", "url(Track\\ Previews/eldescensocrosscountry.webp)", "url(Track\\ Previews/thetitan.webp)", "url(Track\\ Previews/riberarocosacrosscountry.webp)", "url(Track\\ Previews/costeracrosscountrycircuit.webp)", "url(Track\\ Previews/festivalcrosscountry.webp)", "url(Track\\ Previews/oasiscrosscountry.webp)", "url(Track\\ Previews/airfieldcrosscountrycircuit.webp)", "url(Track\\ Previews/lasgranjascrosscountry.webp)", "url(Track\\ Previews/herenciacrosscountrycircuit.webp)", "url(Track\\ Previews/restoscrosscountry.webp)", "url(Track\\ Previews/tropicocrosscountry.webp)", "url(Track\\ Previews/ekbalamcrosscountrycircuit.webp)", "url(Track\\ Previews/estadiocrosscountrycircuit.webp)", "url(Track\\ Previews/urbancrosscountrycircuit.webp)", "url(Track\\ Previews/coppercanyoncrosscountry.webp)", "url(Track\\ Previews/fotofinalcrosscountry.webp)", "url(Track\\ Previews/lasranascrosscountry.webp)", "url(Track\\ Previews/costaestecrosscountry.webp)",

        // Drag Races
        "url(Track\\ Previews/festivaldragstrip.webp)", "url(Track\\ Previews/aerodromodragstrip.webp)", "url(Track\\ Previews/teotihuacandragstrip.webp)",

        // Midnight Battles
        "url(Track\\ Previews/1971fordmustang.webp)", "url(Track\\ Previews/1984hondacivic.webp)", "url(Track\\ Previews/2003toyotacelica.webp)", "url(Track\\ Previews/2010lambomurcielago.webp)",

        // Speed Races
        "url(Track\\ Previews/dragonsfallspeedcircuit.webp)", "url(Track\\ Previews/waterslidespeedcircuit.webp)", "url(Track\\ Previews/twinloopspeedcircuit.webp)", "url(Track\\ Previews/nexusspeedcircuit.webp)", "url(Track\\ Previews/canyonsedgespeedsprint.webp)", "url(Track\\ Previews/canyonloopspeedsprint.webp)", "url(Track\\ Previews/canyonracerspeedsprint.webp)", "url(Track\\ Previews/nexusspeedsprint.webp)", "url(Track\\ Previews/ramsheadspeedsprint.webp)", "url(Track\\ Previews/hotwheelsgoliath.webp)",

        // Hazard Races
        "url(Track\\ Previews/snowfieldshazardcircuit.webp)", "url(Track\\ Previews/forestfallshazardsprint.webp)", "url(Track\\ Previews/canyonsdrophazardsprint.webp)", "url(Track\\ Previews/icecanyonhazardsprint.webp)", "url(Track\\ Previews/forestgorgehazardsprint.webp)", "url(Track\\ Previews/volcanopasshazardsprint.webp)", "url(Track\\ Previews/lavaloophazardsprint.webp)", "url(Track\\ Previews/iceloophazardsprint.webp)",

        // Apex Predators Races
        "url(Track\\ Previews/devilspass.webp)", "url(Track\\ Previews/elbosque.webp)", "url(Track\\ Previews/arzatesprint.webp)", "url(Track\\ Previews/quarrytrail.webp)", "url(Track\\ Previews/thenarrows.webp)", "url(Track\\ Previews/canyontrail.webp)", "url(Track\\ Previews/lacantera.webp)", "url(Track\\ Previews/sendademontana.webp)", "url(Track\\ Previews/theapexrun.webp)",

        // Horizon Raptors Races
        "url(Track\\ Previews/meridian.webp)", "url(Track\\ Previews/foresttrail.webp)", "url(Track\\ Previews/cascadafuerte.webp)", "url(Track\\ Previews/threehills.webp)", "url(Track\\ Previews/lagoazulado.webp)", "url(Track\\ Previews/ruggeddunes.webp)", "url(Track\\ Previews/desertscramble.webp)", "url(Track\\ Previews/trescolinas.webp)", "url(Track\\ Previews/raptorrace.webp)", "url(Track\\ Previews/horizonbadlandsgoliath.webp)",

        // Grit Reapers Races
        "url(Track\\ Previews/reservadelcarrizo.webp)", "url(Track\\ Previews/valledepozas.webp)", "url(Track\\ Previews/tierrasverdes.webp)", "url(Track\\ Previews/palmforest.webp)", "url(Track\\ Previews/switchbackrun.webp)", "url(Track\\ Previews/joyamarron.webp)", "url(Track\\ Previews/orogrande.webp)", "url(Track\\ Previews/crateressecos.webp)", "url(Track\\ Previews/desafio.webp)"
    ];

    // Check if the checkbox is checked
    var roadRacesChecked = document.getElementById("roadRaces").checked;
    var streetRacesChecked = document.getElementById("streetRaces").checked;
    var dirtRacesChecked = document.getElementById("dirtRaces").checked;
    var crossCountryRacesChecked = document.getElementById("crossCountryRaces").checked;
    var dragRacesChecked = document.getElementById("dragRaces").checked;
    var midnightBattlesChecked = document.getElementById("midnightBattles").checked;
    var speedRacesChecked = document.getElementById("speedRaces").checked;
    var hazardRacesChecked = document.getElementById("hazardRaces").checked;
    var apexPredatorsChecked = document.getElementById("apexPredators").checked;
    var horizonRaptorsChecked = document.getElementById("horizonRaptors").checked;
    var gritReapersChecked = document.getElementById("gritReapers").checked;

    // Track name ranges in the array
    var roadRaces = tracks.slice(0, 36);
    var streetRaces = tracks.slice(36, 57);
    var dirtRaces = tracks.slice(57, 77);
    var crossCountryRaces = tracks.slice(77, 97);
    var dragRaces = tracks.slice(97, 100);
    var midnightBattles = tracks.slice(100, 104);
    var speedRaces = tracks.slice(104, 114);
    var hazardRaces = tracks.slice(114, 122);
    var apexPredators = tracks.slice(122, 131);
    var horizonRaptors = tracks.slice(131, 141);
    var gritReapers = tracks.slice(141, 150);

    // Track image link ranges in the array
    var roadRacesImages = images.slice(0, 36);
    var streetRacesImages = images.slice(36, 57);
    var dirtRacesImages = images.slice(57, 77);
    var crossCountryRacesImages = images.slice(77, 97);
    var dragRacesImages = images.slice(97, 100);
    var midnightBattlesImages = images.slice(100, 104);
    var speedRacesImages = images.slice(104, 114);
    var hazardRacesImages = images.slice(114, 122);
    var apexPredatorsImages = images.slice(122, 131);
    var horizonRaptorsImages = images.slice(131, 141);
    var gritReapersImages = images.slice(141, 150);

    // Arrays that store tracks from the selected track types
    var availableTracks = [];
    var availableImages = [];

    //Clear race type
    var raceType = "";

    // If the race type is checked add the track names and preview links to the availableTracks and availableImages arrays
    if(roadRacesChecked){
        availableTracks.push(...roadRaces);
        availableImages.push(...roadRacesImages);
    }
    if(streetRacesChecked){
        availableTracks.push(...streetRaces);
        availableImages.push(...streetRacesImages);
    }
    if(dirtRacesChecked){
        availableTracks.push(...dirtRaces);
        availableImages.push(...dirtRacesImages);
    }
    if(crossCountryRacesChecked){
        availableTracks.push(...crossCountryRaces);
        availableImages.push(...crossCountryRacesImages);
    }
    if(dragRacesChecked){
        availableTracks.push(...dragRaces);
        availableImages.push(...dragRacesImages);
    }
    if(midnightBattlesChecked){
        availableTracks.push(...midnightBattles);
        availableImages.push(...midnightBattlesImages);
    }
    if(speedRacesChecked){
        availableTracks.push(...speedRaces);
        availableImages.push(...speedRacesImages);
    }
    if(hazardRacesChecked){
        availableTracks.push(...hazardRaces);
        availableImages.push(...hazardRacesImages);
    }
    if(apexPredatorsChecked){
        availableTracks.push(...apexPredators);
        availableImages.push(...apexPredatorsImages);
    }
    if(horizonRaptorsChecked){
        availableTracks.push(...horizonRaptors);
        availableImages.push(...horizonRaptorsImages);
    }
    if(gritReapersChecked){
        availableTracks.push(...gritReapers);
        availableImages.push(...gritReapersImages);
    }

    // If none are selected do nothing
    if(availableTracks.length === 0){return;}

    // Pick a random track from the selected tracks
    var random = Math.floor(Math.random() * availableTracks.length);
    var selectedTrack = availableTracks[random];

    // Check which race type was selected
    if(roadRaces.includes(selectedTrack)) raceType = "roadRace";
    if(streetRaces.includes(selectedTrack)) raceType = "streetRace";
    if(dirtRaces.includes(selectedTrack)) raceType = "dirtRace";
    if(crossCountryRaces.includes(selectedTrack)) raceType = "crossCountryRace";
    if(dragRaces.includes(selectedTrack)) raceType = "dragRace";
    if(midnightBattles.includes(selectedTrack)) raceType = "midnightBattle";
    if(speedRaces.includes(selectedTrack)) raceType = "speedRace";
    if(hazardRaces.includes(selectedTrack)) raceType = "hazardRace";
    if(apexPredators.includes(selectedTrack)) raceType = "apexPredators";
    if(horizonRaptors.includes(selectedTrack)) raceType = "horizonRaptors";
    if(gritReapers.includes(selectedTrack)) raceType = "gritReapers";

    // Write the track's name
    document.getElementById("result").innerHTML = selectedTrack;

    // Clear the class
    document.getElementById("result").className = "";

    // Add the selected track type's class
    document.getElementById("result").classList.add(raceType);

    // Check if the track is a circuit
    var circuit = Boolean(false);
    if(selectedTrack.includes("Circuit") || selectedTrack == "The Goliath" || selectedTrack == "Hot Wheels Goliath" || selectedTrack.includes("Scramble")) circuit = true;

    // Write the track type and change the icon if it's a special track
    var raceTypeSpan = document.getElementById("raceType");
    var icon = document.getElementById("icon");
    if(raceType == "roadRace"){
        raceTypeSpan.innerHTML = "<span style=\"color: #0090d6;\">Road Race Sprint</span>";
        icon.src = "Race Icons/roadsprint.png";
    }
    if(raceType == "roadRace" && circuit == true){
        raceTypeSpan.innerHTML = "<span style=\"color: #0090d6;\">Road Race Circuit</span>";
        icon.src = "Race Icons/roadcircuit.png";
    }
    if(selectedTrack == "The Goliath"){
        icon.src = "Race Icons/goliath.png";
        document.getElementById("result").classList.add("goliath");
    }
    if(selectedTrack == "The Colossus") icon.src = "Race Icons/colossus.png";
    document.getElementById("winter").innerHTML = "";
    if(selectedTrack == "Winter Wonderland Circuit") document.getElementById("winter").innerHTML = "This race route is available in freeroam only during the winter season";
    if(raceType == "streetRace"){
        raceTypeSpan.innerHTML = "<span style=\"color: #b62daf;\">Street Race</span>";
        icon.src = "Race Icons/street.png";
    }
    if(selectedTrack == "The Marathon") icon.src = "Race Icons/marathon.png";
    if(raceType == "dirtRace"){
        raceTypeSpan.innerHTML = "<span style=\"color: #ff7111;\">Dirt Race Sprint</span>";
        icon.src = "Race Icons/dirtsprint.png";
    }
    if(raceType == "dirtRace" && circuit == true){
        raceTypeSpan.innerHTML = "<span style=\"color: #ff7111;\">Dirt Race Circuit</span>";
        icon.src = "Race Icons/dirtcircuit.png";
    }
    if(selectedTrack == "The Gauntlet") icon.src = "Race Icons/gauntlet.png";
    if(raceType == "crossCountryRace"){
        raceTypeSpan.innerHTML = "<span style=\"color: #1ca452;\">Cross Country Race Sprint</span>";
        icon.src = "Race Icons/crosscountrysprint.png";
    }
    if(raceType == "crossCountryRace" && circuit == true){
        raceTypeSpan.innerHTML = "<span style=\"color: #1ca452;\">Cross Country Race Circuit</span>";
        icon.src = "Race Icons/crosscountrycircuit.png";
    }
    if(selectedTrack == "The Titan") icon.src = "Race Icons/titan.png";
    if(raceType == "dragRace"){
        raceTypeSpan.innerHTML = "<span style=\"color: #df386e;\">Drag Race</span>";
        icon.src = "Race Icons/drag.png";
    }
    if(raceType == "midnightBattle"){
        raceTypeSpan.innerHTML = "<span style=\"color: #501e54;\">Midnight Battle</span>";
        icon.src = "Race Icons/midnightbattle.png";
    }
    if(raceType == "speedRace"){
        raceTypeSpan.innerHTML = "<span style=\"color: #0090d6;\">Speed Race Sprint</span>";
        icon.src = "Race Icons/speedsprint.png";
    }
    if(raceType == "speedRace" && circuit == true){
        raceTypeSpan.innerHTML = "<span style=\"color: #0090d6;\">Speed Race Circuit</span>";
        icon.src = "Race Icons/speedcircuit.png";
    }
    if(selectedTrack == "Hot Wheels Goliath") icon.src = "Race Icons/hotwheelsgoliath.png";
    if(raceType == "hazardRace"){
        raceTypeSpan.innerHTML = "<span style=\"color: #ff7111;\">Hazard Race Sprint</span>";
        icon.src = "Race Icons/hazardsprint.png";
    }
    if(raceType == "hazardRace" && circuit == true){
        raceTypeSpan.innerHTML = "<span style=\"color: #ff7111;\">Hazard Race Circuit</span>";
        icon.src = "Race Icons/hazardcircuit.png";
    }
    if(raceType == "apexPredators"){
        raceTypeSpan.innerHTML = "<span style=\"color: #0090d6;\">Apex Predators Race</span>";
        icon.src = "Race Icons/apexpredators.png";
    }
    if(selectedTrack == "The Apex Run"){icon.src = "Race Icons/theapexrun.png";}
    if(raceType == "horizonRaptors"){
        raceTypeSpan.innerHTML = "<span style=\"color: #ff8b00;\">Horizon Raptors Race</span>";
        icon.src = "Race Icons/horizonraptors.png";
    }
    if(selectedTrack == "Raptor Race!"){icon.src = "Race Icons/raptorrace.png";}
    if(selectedTrack == "Horizon Badlans Goliath"){icon.src = "Race Icons/badlandsgoliath.png";}
    if(selectedTrack == "Meridian" || selectedTrack == "Rugged Dunes"){icon.src = "Race Icons/horizonraptors2.png";}
    if(raceType == "gritReapers"){
        raceTypeSpan.innerHTML = "<span style=\"color: #9526dd;\">Grit Reapers Race</span>";
        icon.src = "Race Icons/gritreapers2.png";
    }
    if(selectedTrack == "Desafío"){icon.src = "Race Icons/desafio.png";}
    if(selectedTrack == "Switchback Run" || selectedTrack == "Palm Forest"){icon.src = "Race Icons/gritreapers.png";}
    if(selectedTrack == "Reserva Del Carrizo" || selectedTrack == "Orogrande"){icon.src = "Race Icons/gritreapers3.png";}

    // Show the track preview and the blurred background
    document.getElementById("image").style.backgroundImage = availableImages[random];
    document.getElementById("image2").style.backgroundImage = availableImages[random];
}

function deselectall(){
    var roadRaces = document.getElementById("roadRaces");
    var streetRaces = document.getElementById("streetRaces");
    var dirtRaces = document.getElementById("dirtRaces");
    var crossCountryRaces = document.getElementById("crossCountryRaces");
    var dragRaces = document.getElementById("dragRaces");
    var midnightBattles = document.getElementById("midnightBattles");
    var speedRaces = document.getElementById("speedRaces");
    var hazardRaces = document.getElementById("hazardRaces");
    var apexPredators = document.getElementById("apexPredators");
    var horizonRaptors = document.getElementById("horizonRaptors");
    var gritReapers = document.getElementById("gritReapers");

    roadRaces.checked = false;
    streetRaces.checked = false;
    dirtRaces.checked = false;
    crossCountryRaces.checked = false;
    dragRaces.checked = false;
    midnightBattles.checked = false;
    speedRaces.checked = false;
    hazardRaces.checked = false;
    apexPredators.checked = false;
    horizonRaptors.checked = false;
    gritReapers.checked = false;
}

var moreopen = Boolean(false);
function more(){
    var menu = document.getElementById("menu");
    var moreicon = document.getElementById("moreicon");
    var menuclose = document.getElementById("menuclose");
    if(moreopen == false){
        menu.classList.add("open");
        menuclose.classList.add("open");
        moreicon.classList.add("open");
        moreicon.classList.remove("closed");
        moreopen = true;
    }
    else{
        menu.classList.remove("open");
        menuclose.classList.remove("open");
        moreicon.classList.remove("open");
        moreicon.classList.add("closed");
        moreopen = false;
    }
}