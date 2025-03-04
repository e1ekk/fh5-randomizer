function run(){
    // Names of all tracks
    var tracks = [
        // Road Races
        "Bahía De Plano Circuit", "Dunas Blancas Sprint", "Emerald Circuit", "Descansar Dorado Sprint", "Volcán Sprint", "Horizon Mexico Circuit", "Reservorio Sprint", "Arch of Mulegé Circuit", "Sierra Verde Sprint", "Copper Canyon Sprint", "Llanuras Sprint", "Gran Pantano Sprint", "The Colossus", "The Goliath", "Playa Azul Circuit", "Los Jardines Circuit", "Riviera Sprint", "Chihuahua Circuit", "Tierra Próspera Circuit", "Estadio Circuit", "Lookout Circuit", "Bola Ocho Circuit", "Cathedral Circuit", "Panorámica Sprint", "Plaza Circuit", "Horizon Oval Circuit", "Vista Del Mar Sprint", "Marigold Sprint", "Aeródromo Sprint", "Línea Costera Sprint", "Winter Wonderland Circuit", "Cloverleaf Sprint", "San Juan Sprint", "Valle Del Río Sprint", "Rocosa Sprint",

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
        "url(Track\\ Previews/bahiadeplanocircuit.png)", "url(Track\\ Previews/dunasblancassprint.png)", "url(Track\\ Previews/emeraldcircuit.png)", "url(Track\\ Previews/descansardoradosprint.png)", "url(Track\\ Previews/volcansprint.png)", "url(Track\\ Previews/horizonmexicocircuit.png)", "url(Track\\ Previews/reservoriosprint.png)", "url(Track\\ Previews/archofmulegecircuit.png)", "url(Track\\ Previews/sierraverdesprint.png)", "url(Track\\ Previews/coppercanyonsprint.png)", "url(Track\\ Previews/llanurassprint.png)", "url(Track\\ Previews/granpantanosprint.png)", "url(Track\\ Previews/thecolossus.png)", "url(Track\\ Previews/thegoliath.png)", "url(Track\\ Previews/playaazulcircuit.png)", "url(Track\\ Previews/losjardinescircuit.png)", "url(Track\\ Previews/rivierasprint.png)", "url(Track\\ Previews/chihuahuacircuit.png)", "url(Track\\ Previews/tierraprosperacircuit.png)", "url(Track\\ Previews/estadiocircuit.png)", "url(Track\\ Previews/lookoutcircuit.png)", "url(Track\\ Previews/bolaochocircuit.png)", "url(Track\\ Previews/cathedralcircuit.png)", "url(Track\\ Previews/panoramicasprint.png)", "url(Track\\ Previews/plazacircuit.png)", "url(Track\\ Previews/horizonovalcircuit.png)", "url(Track\\ Previews/vistadelmarsprint.png)", "url(Track\\ Previews/marigoldsprint.png)", "url(Track\\ Previews/aerodromosprint.png)", "url(Track\\ Previews/lineacosterasprint.png)", "url(Track\\ Previews/winterwonderlandcircuit.png)", "url(Track\\ Previews/cloverleafsprint.png)", "url(Track\\ Previews/sanjuansprint.png)", "url(Track\\ Previews/valledelriosprint.png)", "url(Track\\ Previews/rocosasprint.png)",

        // Street Races
        "url(Track\\ Previews/ellagoblanco.png)", "url(Track\\ Previews/rutanorte.png)", "url(Track\\ Previews/castillodelmar.png)", "url(Track\\ Previews/costarocosa.png)", "url(Track\\ Previews/festivalgatecrash.png)", "url(Track\\ Previews/lasafueras.png)", "url(Track\\ Previews/hilltopdescent.png)", "url(Track\\ Previews/tunnelrun.png)", "url(Track\\ Previews/canonrun.png)", "url(Track\\ Previews/guanajuatosur.png)", "url(Track\\ Previews/horizoncallejera.png)", "url(Track\\ Previews/crucedelvalle.png)", "url(Track\\ Previews/lasladeras.png)", "url(Track\\ Previews/themarathon.png)", "url(Track\\ Previews/coastrun.png)", "url(Track\\ Previews/highlandclimb.png)", "url(Track\\ Previews/carreterachase.png)", "url(Track\\ Previews/bosquedelsur.png)", "url(Track\\ Previews/jungledescent.png)", "url(Track\\ Previews/granjasdetapalpa.png)", "url(Track\\ Previews/wetlandcharge.png)",

        // Dirt Races
        "url(Track\\ Previews/horizonbajascramble.png)", "url(Track\\ Previews/bajacaliforniatrail.png)", "url(Track\\ Previews/calderascramble.png)", "url(Track\\ Previews/montanatrail.png)", "url(Track\\ Previews/fueradelcaminotrail.png)", "url(Track\\ Previews/elpipilascramble.png)", "url(Track\\ Previews/desiertotrail.png)", "url(Track\\ Previews/sanjuanscramble.png)", "url(Track\\ Previews/mulegetownscramble.png)", "url(Track\\ Previews/cordilleratrail.png)", "url(Track\\ Previews/riverscramble.png)", "url(Track\\ Previews/tapalpatrail.png)", "url(Track\\ Previews/teotihuacanscramble.png)", "url(Track\\ Previews/cascadatrail.png)", "url(Track\\ Previews/laselvascramble.png)", "url(Track\\ Previews/barrancatrail.png)", "url(Track\\ Previews/bajiotrail.png)", "url(Track\\ Previews/thegauntlet.png)", "url(Track\\ Previews/tulumtrail.png)", "url(Track\\ Previews/mangrovescramble.png)",

        // Cross Country Races
        "url(Track\\ Previews/bajacrosscountrycircuit.png)", "url(Track\\ Previews/lasdunascrosscountry.png)", "url(Track\\ Previews/eldescensocrosscountry.png)", "url(Track\\ Previews/thetitan.png)", "url(Track\\ Previews/riberarocosacrosscountry.png)", "url(Track\\ Previews/costeracrosscountrycircuit.png)", "url(Track\\ Previews/festivalcrosscountry.png)", "url(Track\\ Previews/oasiscrosscountry.png)", "url(Track\\ Previews/airfieldcrosscountrycircuit.png)", "url(Track\\ Previews/lasgranjascrosscountry.png)", "url(Track\\ Previews/herenciacrosscountrycircuit.png)", "url(Track\\ Previews/restoscrosscountry.png)", "url(Track\\ Previews/tropicocrosscountry.png)", "url(Track\\ Previews/ekbalamcrosscountrycircuit.png)", "url(Track\\ Previews/estadiocrosscountrycircuit.png)", "url(Track\\ Previews/urbancrosscountrycircuit.png)", "url(Track\\ Previews/coppercanyoncrosscountry.png)", "url(Track\\ Previews/fotofinalcrosscountry.png)", "url(Track\\ Previews/lasranascrosscountry.png)", "url(Track\\ Previews/costaestecrosscountry.png)",

        // Drag Races
        "url(Track\\ Previews/festivaldragstrip.png)", "url(Track\\ Previews/aerodromodragstrip.png)", "url(Track\\ Previews/teotihuacandragstrip.png)",

        // Midnight Battles
        "url(Track\\ Previews/1971fordmustang.png)", "url(Track\\ Previews/1984hondacivic.png)", "url(Track\\ Previews/2003toyotacelica.png)", "url(Track\\ Previews/2010lambomurcielago.png)",

        // Speed Races
        "url(Track\\ Previews/dragonsfallspeedcircuit.png)", "url(Track\\ Previews/waterslidespeedcircuit.png)", "url(Track\\ Previews/twinloopspeedcircuit.png)", "url(Track\\ Previews/nexusspeedcircuit.png)", "url(Track\\ Previews/canyonsedgespeedsprint.png)", "url(Track\\ Previews/canyonloopspeedsprint.png)", "url(Track\\ Previews/canyonracerspeedsprint.png)", "url(Track\\ Previews/nexusspeedsprint.png)", "url(Track\\ Previews/ramsheadspeedsprint.png)", "url(Track\\ Previews/hotwheelsgoliath.png)",

        // Hazard Races
        "url(Track\\ Previews/snowfieldshazardcircuit.png)", "url(Track\\ Previews/forestfallshazardsprint.png)", "url(Track\\ Previews/canyonsdrophazardsprint.png)", "url(Track\\ Previews/icecanyonhazardsprint.png)", "url(Track\\ Previews/forestgorgehazardsprint.png)", "url(Track\\ Previews/volcanopasshazardsprint.png)", "url(Track\\ Previews/lavaloophazardsprint.png)", "url(Track\\ Previews/iceloophazardsprint.png)",

        // Apex Predators Races
        "url(Track\\ Previews/devilspass.png)", "url(Track\\ Previews/elbosque.png)", "url(Track\\ Previews/arzatesprint.png)", "url(Track\\ Previews/quarrytrail.png)", "url(Track\\ Previews/thenarrows.png)", "url(Track\\ Previews/canyontrail.png)", "url(Track\\ Previews/lacantera.png)", "url(Track\\ Previews/sendademontana.png)", "url(Track\\ Previews/theapexrun.png)",

        // Horizon Raptors Races
        "url(Track\\ Previews/meridian.png)", "url(Track\\ Previews/foresttrail.png)", "url(Track\\ Previews/cascadafuerte.png)", "url(Track\\ Previews/threehills.png)", "url(Track\\ Previews/lagoazulado.png)", "url(Track\\ Previews/ruggeddunes.png)", "url(Track\\ Previews/desertscramble.png)", "url(Track\\ Previews/trescolinas.png)", "url(Track\\ Previews/raptorrace.png)", "url(Track\\ Previews/horizonbadlandsgoliath.png)",

        // Grit Reapers Races
        "url(Track\\ Previews/reservadelcarrizo.png)", "url(Track\\ Previews/valledepozas.png)", "url(Track\\ Previews/tierrasverdes.png)", "url(Track\\ Previews/palmforest.png)", "url(Track\\ Previews/switchbackrun.png)", "url(Track\\ Previews/joyamarron.png)", "url(Track\\ Previews/orogrande.png)", "url(Track\\ Previews/crateressecos.png)", "url(Track\\ Previews/desafio.png)"
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
    var roadRaces = tracks.slice(0, 35);
    var streetRaces = tracks.slice(35, 56);
    var dirtRaces = tracks.slice(56, 76);
    var crossCountryRaces = tracks.slice(76, 96);
    var dragRaces = tracks.slice(96, 99);
    var midnightBattles = tracks.slice(99, 103);
    var speedRaces = tracks.slice(103, 113);
    var hazardRaces = tracks.slice(113, 121);
    var apexPredators = tracks.slice(121, 130);
    var horizonRaptors = tracks.slice(130, 140);
    var gritReapers = tracks.slice(140, 149);

    // Track image link ranges in the array
    var roadRacesImages = images.slice(0, 35);
    var streetRacesImages = images.slice(35, 56);
    var dirtRacesImages = images.slice(56, 76);
    var crossCountryRacesImages = images.slice(76, 96);
    var dragRacesImages = images.slice(96, 99);
    var midnightBattlesImages = images.slice(99, 103);
    var speedRacesImages = images.slice(103, 113);
    var hazardRacesImages = images.slice(113, 121);
    var apexPredatorsImages = images.slice(121, 130);
    var horizonRaptorsImages = images.slice(130, 140);
    var gritReapersImages = images.slice(140, 149);

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