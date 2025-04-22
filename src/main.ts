import './style.css';
import L from 'leaflet';
import migrationData from './data/data.json';

interface MigrationYearData {
    "Net Migration": number;
    "Milestones": string;
}

interface MigrationData {
    [year: string]: MigrationYearData;
}

interface GeoJSONFeature {
    type: string;
    properties: any;
    geometry: any;
}

interface GeoJSONData {
    type: string;
    name?: string;
    crs?: any;
    features: GeoJSONFeature[];
}

const prGeoJsonData = {
  "type": "FeatureCollection",
  "name": "pr",
  "crs": {
    "type": "name",
    "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" }
  },
  "features": [
    {
      "type": "Feature",
      "properties": { 
        "NAME": "Puerto Rico"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-66.282434455008215, 18.514761664295364],
            [-65.7713028632093, 18.426679185453878],
            [-65.591003790942949, 18.228034979723915],
            [-65.847163865813769, 17.975905666571862],
            [-66.599934455009489, 17.981822618069273],
            [-67.184162360285271, 17.946553453030077],
            [-67.242427537694354, 18.374460150622937],
            [-67.10067908391774, 18.520601101144351],
            [-66.282434455008215, 18.514761664295364]
          ]
        ]
      }
    }
  ]
};

const usGeoJsonData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "NAME": "United States"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-122.84, 49.000000000000114],
            [-120.0, 49.000000000000114],
            [-117.03121, 49.0],
            [-116.04818, 49.0],
            [-113.0, 49.0],
            [-110.05, 49.0],
            [-107.05, 49.0],
            [-104.04826, 48.99986],
            [-100.65, 49.000000000000114],
            [-97.228720000004799, 49.0007],
            [-95.159069509172056, 49.0],
            [-95.15609, 49.38425],
            [-94.81758, 49.38905],
            [-94.64, 48.84],
            [-94.32914, 48.67074],
            [-93.63087, 48.60926],
            [-92.61, 48.45],
            [-91.64, 48.14],
            [-90.83, 48.27],
            [-89.6, 48.010000000000105],
            [-89.272917446636654, 48.019808254582813],
            [-88.378114183286712, 48.302917588893706],
            [-87.439792623300278, 47.94],
            [-86.461990831228263, 47.553338019392001],
            [-85.652363247403414, 47.220218817730512],
            [-84.876079881514897, 46.900083319682381],
            [-84.779238247399917, 46.637101955749017],
            [-84.543748745445839, 46.538684190449146],
            [-84.6049, 46.4396],
            [-84.3367, 46.40877],
            [-84.142119513673407, 46.512225857115709],
            [-84.091851264161505, 46.27541860613826],
            [-83.89076534700574, 46.116926988299014],
            [-83.616130947590591, 46.116926988299014],
            [-83.469550747394692, 45.994686387712534],
            [-83.592850714843109, 45.816893622412522],
            [-82.550924648758212, 45.347516587905432],
            [-82.337763125431138, 44.44],
            [-82.137642381503952, 43.571087551439973],
            [-82.43, 42.98],
            [-82.9, 42.43],
            [-83.12, 42.08],
            [-83.14199968131264, 41.975681057292874],
            [-83.029810146806994, 41.832795722005983],
            [-82.690089280920233, 41.675105088867326],
            [-82.439277716791594, 41.675105088867326],
            [-81.277746548167158, 42.209025987306816],
            [-80.247447679347943, 42.366199856122549],
            [-78.939362148743754, 42.863611355147981],
            [-78.92, 42.965],
            [-79.01, 43.27],
            [-79.171673550111862, 43.466339423184259],
            [-78.720279914042351, 43.625089423184932],
            [-77.737885097957701, 43.629055589363283],
            [-76.820034145805579, 43.628784288093755],
            [-76.5, 44.018458893758648],
            [-76.375, 44.09631],
            [-75.31821, 44.81645],
            [-74.867, 45.00048],
            [-73.34783, 45.00738],
            [-71.50506, 45.0082],
            [-71.405, 45.255],
            [-71.08482, 45.30524000000014],
            [-70.66, 45.46],
            [-70.305, 45.915],
            [-69.99997, 46.69307],
            [-69.237216, 47.447781],
            [-68.905, 47.185],
            [-68.23444, 47.35486],
            [-67.79046, 47.06636],
            [-67.79134, 45.70281],
            [-67.13741, 45.13753],
            [-66.96466, 44.809700000000134],
            [-68.03252, 44.3252],
            [-69.06, 43.98],
            [-70.11617, 43.684050000000127],
            [-70.645475633411024, 43.090238348964021],
            [-70.81489, 42.8653],
            [-70.825, 42.335],
            [-70.495, 41.805],
            [-70.08, 41.78],
            [-70.185, 42.145],
            [-69.88497, 41.92283],
            [-69.96503, 41.63717000000014],
            [-70.64, 41.475],
            [-71.12039, 41.494450000000143],
            [-71.86, 41.32],
            [-72.295, 41.27],
            [-72.87643, 41.22065],
            [-73.71, 40.931102351654488],
            [-72.24126, 41.119480000000124],
            [-71.944999999999879, 40.93],
            [-73.345, 40.63],
            [-73.982, 40.628],
            [-73.952325, 40.75075],
            [-74.25671, 40.47351],
            [-73.96244, 40.42763],
            [-74.17838, 39.70926],
            [-74.90604, 38.93954],
            [-74.98041, 39.1964],
            [-75.20002, 39.248450000000105],
            [-75.52805, 39.4985],
            [-75.32, 38.96],
            [-75.071834764789855, 38.782032230179254],
            [-75.05673, 38.40412],
            [-75.37747, 38.01551],
            [-75.94023, 37.21689],
            [-76.03127, 37.2566],
            [-75.722049999999854, 37.937050000000113],
            [-76.23287, 38.319215],
            [-76.35, 39.15],
            [-76.542725, 38.717615],
            [-76.32933, 38.08326],
            [-76.989997931613516, 38.239991766913363],
            [-76.30162, 37.917945],
            [-76.25874, 36.9664],
            [-75.9718, 36.89726],
            [-75.868039999999894, 36.55125],
            [-75.72749, 35.550740000000133],
            [-76.36318, 34.808540000000107],
            [-77.397635, 34.51201],
            [-78.05496, 33.92547],
            [-78.554349999999886, 33.861330000000123],
            [-79.06067, 33.49395],
            [-79.20357, 33.15839],
            [-80.301325, 32.509355],
            [-80.86498, 32.0333],
            [-81.33629, 31.44049],
            [-81.49042, 30.7299900000001],
            [-81.31371, 30.03552],
            [-80.98, 29.180000000000121],
            [-80.535585, 28.47213],
            [-80.529999999999859, 28.04],
            [-80.056539284977589, 26.880000000000109],
            [-80.088015, 26.205765],
            [-80.13156, 25.816775],
            [-80.38103, 25.20616],
            [-80.68, 25.08],
            [-81.17213, 25.201260000000104],
            [-81.33, 25.64],
            [-81.709999999999866, 25.87],
            [-82.24, 26.730000000000132],
            [-82.70515, 27.49504],
            [-82.85526, 27.88624],
            [-82.65, 28.550000000000125],
            [-82.93, 29.1],
            [-83.70959, 29.93656],
            [-84.1, 30.09],
            [-85.10882, 29.63615],
            [-85.28784, 29.68612000000013],
            [-85.7731, 30.15261],
            [-86.4, 30.4],
            [-87.53036, 30.27433],
            [-88.41782, 30.3849],
            [-89.18049, 30.31598],
            [-89.593831178419805, 30.159994004836847],
            [-89.413735, 29.89419],
            [-89.43, 29.48864],
            [-89.21767, 29.29108],
            [-89.40823, 29.15961],
            [-89.77928, 29.307140000000118],
            [-90.15463, 29.11743],
            [-90.880225, 29.148535],
            [-91.626785, 29.677000000000135],
            [-92.49906, 29.5523],
            [-93.22637, 29.78375],
            [-93.84842, 29.71363],
            [-94.69, 29.480000000000132],
            [-95.60026, 28.73863],
            [-96.59404, 28.30748],
            [-97.139999999999873, 27.83],
            [-97.37, 27.38],
            [-97.38, 26.69],
            [-97.33, 26.21],
            [-97.139999999999873, 25.87],
            [-97.53, 25.84],
            [-98.24, 26.06],
            [-99.02, 26.37],
            [-99.3, 26.84],
            [-99.52, 27.54],
            [-100.11, 28.110000000000127],
            [-100.45584, 28.696120000000121],
            [-100.9576, 29.380710000000136],
            [-101.6624, 29.7793],
            [-102.48, 29.76],
            [-103.11, 28.97],
            [-103.94, 29.27],
            [-104.456969999999899, 29.57196],
            [-104.70575, 30.12173],
            [-105.03737, 30.64402],
            [-105.63159, 31.08383],
            [-106.1429, 31.39995],
            [-106.50758999999988, 31.75452],
            [-108.24, 31.754853718166373],
            [-108.24194, 31.34222],
            [-109.035, 31.341940000000136],
            [-111.02361, 31.33472],
            [-113.30498, 32.03914],
            [-114.815, 32.52528],
            [-114.72139, 32.72083],
            [-115.99135, 32.612390000000119],
            [-117.127759999999853, 32.53534],
            [-117.295937691273934, 33.046224615203869],
            [-117.944, 33.621236431201396],
            [-118.410602275897531, 33.740909223124447],
            [-118.519894822799756, 34.027781577575752],
            [-119.081, 34.078],
            [-119.438840642016714, 34.34847717828427],
            [-120.36778, 34.44711],
            [-120.62286, 34.60855],
            [-120.74433, 35.156860000000108],
            [-121.71457, 36.16153],
            [-122.54747, 37.551760000000115],
            [-122.51201, 37.783390000000111],
            [-122.95319, 38.11371],
            [-123.7272, 38.951660000000118],
            [-123.86517, 39.76699],
            [-124.39807, 40.3132],
            [-124.17886, 41.142020000000116],
            [-124.2137, 41.999640000000113],
            [-124.53284, 42.765990000000102],
            [-124.14214, 43.70838],
            [-124.020535, 44.615895],
            [-123.89893, 45.52341],
            [-124.079635, 46.86475],
            [-124.39567, 47.72017000000011],
            [-124.687210083007812, 48.184432983398551],
            [-124.56610107421875, 48.379714965820369],
            [-123.12, 48.04],
            [-122.58736, 47.096],
            [-122.34, 47.36],
            [-122.5, 48.18],
            [-122.84, 49.000000000000114]
          ]
        ]
      }
    }
  ]
};

const existingIndicator = document.getElementById('migration-indicator');
if (existingIndicator && existingIndicator.parentNode) {
    existingIndicator.parentNode.removeChild(existingIndicator);
}

const map = L.map('map', {
  zoomControl: false,
  attributionControl: false
}).setView([30, -80], 3);

L.control.attribution({
  position: 'bottomright',
  prefix: '© <a href="https://leafletjs.com">Leaflet</a> | Data: Puerto Rico Migration Study'
}).addTo(map);

L.control.zoom({
  position: 'topright'
}).addTo(map);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
}).addTo(map);

let prLayer: L.GeoJSON;
let usLayer: L.GeoJSON;
let migrationArrow: any | null = null;
let isAnimating = false;
let lastUpdateTime = 0;

function initializeLayers() {
    try {
        prLayer = L.geoJSON(prGeoJsonData, {
            style: { 
                color: "#3388ff", 
                weight: 2, 
                fillOpacity: 0.2,
                fillColor: "#66b3ff",
                opacity: 0.8
            }
        }).addTo(map);
        
        usLayer = L.geoJSON(usGeoJsonData, {
            style: { 
                color: "#ff5e5e", 
                weight: 2, 
                fillOpacity: 0.2,
                fillColor: "#ffb3b3",
                opacity: 0.8
            }
        }).addTo(map);
        
        addInteractivityToLayers();
        fitMapToBounds();
        
    } catch (error) {
        console.error("Error initializing GeoJSON layers:", error);
        console.log("US GeoJSON data:", usGeoJsonData);
        map.setView([30, -80], 3);
    }
}

function addInteractivityToLayers() {
    prLayer.on({
        mouseover: (e) => highlightFeature(e),
        mouseout: (e) => resetHighlight(e, 'pr'),
        click: zoomToFeature
    });
    
    usLayer.on({
        mouseover: (e) => highlightFeature(e),
        mouseout: (e) => resetHighlight(e, 'us'),
        click: zoomToFeature
    });
}

function highlightFeature(e: any) {
    const layer = e.target;
    layer.setStyle({
        weight: 3,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.4
    });
    layer.bringToFront();
}

function resetHighlight(e: any, type: string) {
    const layer = e.target;
    if (type === 'pr') {
        layer.setStyle({
            color: "#3388ff", 
            weight: 2, 
            fillOpacity: 0.2,
            fillColor: "#66b3ff",
            opacity: 0.8
        });
    } else {
        layer.setStyle({
            color: "#ff5e5e", 
            weight: 2, 
            fillOpacity: 0.2,
            fillColor: "#ffb3b3",
            opacity: 0.8
        });
    }
}

function zoomToFeature(e: any) {
    map.fitBounds(e.target.getBounds());
}

function fitMapToBounds() {
    setTimeout(() => {
        if (!prLayer || !usLayer) return;
        
        const prBounds = prLayer.getBounds();
        const usBounds = usLayer.getBounds();

        if (prBounds.isValid() && usBounds.isValid()) {
            const combinedBounds = L.latLngBounds(prBounds).extend(usBounds);
            const paddedBounds: L.LatLngBounds = combinedBounds.pad(0.1);
            map.fitBounds(paddedBounds);
        } else {
            console.warn("Could not get valid bounds for PR or US layer to fit map.");
            map.setView([30, -80], 3);
        }
    }, 100);
}

const typedMigrationData: MigrationData = migrationData;
const years = Object.keys(typedMigrationData).sort();
const minYear = parseInt(years[0], 10);
const maxYear = parseInt(years[years.length - 1], 10);

const slider = document.getElementById('year-slider') as HTMLInputElement;
const yearLabel = document.getElementById('year-label') as HTMLSpanElement;
const valueDisplay = document.getElementById('value-display') as HTMLSpanElement;

slider.min = minYear.toString();
slider.max = maxYear.toString();
slider.value = minYear.toString();

let migrationFlowLine: L.Polyline | null = null;

const prCentroid: L.LatLngTuple = [18.2208, -66.5901];
const usCentroid: L.LatLngTuple = [39.8283, -98.5795];

let previousDirection: 'inflow' | 'outflow' | null = null;
let previousWeight: number = 0;

function getMilestoneIcon(milestoneText: string): string {
    // Define patterns to match with appropriate icons
    const patterns = [
        { regex: /hurricane|irma|maria|hugo|fiona|georges/i, icon: 'fa-hurricane' },
        { regex: /earthquake/i, icon: 'fa-house-crack' },
        { regex: /election|governor|wins|plebiscite|vote|status/i, icon: 'fa-vote-yea' },
        { regex: /economic|recession|section 936|tax|debt|promesa|fiscal/i, icon: 'fa-chart-line' },
        { regex: /migration|emigration|exodus|outflow|inflow|return/i, icon: 'fa-plane' },
        { regex: /protest|resign/i, icon: 'fa-bullhorn' },
        { regex: /covid|pandemic/i, icon: 'fa-virus' },
        { regex: /military|naval|vieques/i, icon: 'fa-shield-alt' },
        { regex: /landslide|disaster|damage/i, icon: 'fa-triangle-exclamation' },
        { regex: /law|act|congress|legal/i, icon: 'fa-gavel' },
        { regex: /oil|energy|power/i, icon: 'fa-bolt' }
    ];

    // Find the first matching pattern
    for (const pattern of patterns) {
        if (pattern.regex.test(milestoneText)) {
            return pattern.icon;
        }
    }

    // Default icon if no pattern matches
    return 'fa-info-circle';
}

function updateVisualization(year: number) {
    if (isAnimating) return;
    
    const yearStr = year.toString();
    const data = typedMigrationData[yearStr];
    const netMigration = data ? data["Net Migration"] : 0;
    const milestone = data ? data["Milestones"] : "No milestone data available";

    const currentDirection = netMigration < 0 ? 'outflow' : 'inflow';
    
    animateCounterUpdate(yearLabel, yearStr);
    animateCounterUpdate(valueDisplay, netMigration.toLocaleString());
    valueDisplay.className = 'migration-value ' + (netMigration >= 0 ? 'positive' : 'negative');
    
    // Update milestone text with icon
    const milestoneElement = document.getElementById('milestone-text');
    if (milestoneElement) {
        animateTextChange(milestoneElement, milestone, milestone);
    }

    if (!data) return;

    const absMigration = Math.abs(netMigration);
    const minThickness = 2;
    const maxThickness = 40;
    
    const weight = minThickness + (Math.min(absMigration, 150000) / 150000) * (maxThickness - minThickness);
    
    console.log(`Año: ${year}, Migración: ${netMigration}, Grosor: ${weight.toFixed(1)}px`);
    
    const startPoint = netMigration < 0 ? prCentroid : usCentroid;
    const endPoint = netMigration < 0 ? usCentroid : prCentroid;
    const color = netMigration < 0 ? '#FF3333' : '#33CC33';
    
    const directionChanged = previousDirection !== null && previousDirection !== currentDirection;
    
    cleanupPreviousVisualization();
    
    const points = calculateCurvedPath(startPoint, endPoint);
    
    const lineId = `migration-line-${Date.now()}`;
    migrationFlowLine = L.polyline(points, {
        color: color,
        weight: weight,
        opacity: 0.85,
        className: `migration-flow-line ${lineId}`,
        lineCap: 'round',
        lineJoin: 'round'
    }).addTo(map);

    if (directionChanged) {
        const lineElement = document.querySelector(`.${lineId}`);
        if (lineElement) {
            const style = document.createElement('style');
            style.innerHTML = `
                @keyframes appear-${lineId} {
                    0% { opacity: 0.4; stroke-width: ${previousWeight * 0.8}px; }
                    50% { opacity: 0.7; stroke-width: ${(previousWeight + weight) / 2}px; }
                    100% { opacity: 1; stroke-width: ${weight}px; }
                }
                
                .${lineId} {
                    animation: appear-${lineId} 1.2s ease-in-out forwards;
                }
            `;
            document.head.appendChild(style);
        }
    }

    setTimeout(() => {
        if (migrationFlowLine) {
            migrationArrow = L.polylineDecorator(migrationFlowLine, {
                patterns: [
                    {
                        offset: '25%',
                        repeat: '50%',
                        symbol: L.Symbol.arrowHead({
                            pixelSize: Math.max(15, Math.min(40, weight * 1.2)),
                            headAngle: 45,
                            polygon: true,
                            pathOptions: {
                                color: color,
                                fillColor: color,
                                fillOpacity: 1,
                                weight: 0
                            }
                        })
                    }
                ]
            }).addTo(map);
        }
    }, directionChanged ? 400 : 100);
    
    // Store current values for next update
    previousDirection = currentDirection;
    previousWeight = weight;
}

// Clean up previous visualization elements
function cleanupPreviousVisualization() {
    if (migrationFlowLine) {
        map.removeLayer(migrationFlowLine);
        migrationFlowLine = null;
    }
    
    if (migrationArrow) {
        map.removeLayer(migrationArrow);
        migrationArrow = null;
    }
}

function calculateCurvedPath(start: L.LatLngTuple, end: L.LatLngTuple): L.LatLngTuple[] {
    const latlngs: L.LatLngTuple[] = [];
    const offsetX = (end[1] - start[1]) * 0.15;
    const offsetY = (end[0] - start[0]) * 0.15;
    
    latlngs.push(start);
    
    for (let i = 1; i < 12; i++) {
        const ratio = i / 12;
        const x = start[1] * (1 - ratio) + end[1] * ratio;
        const y = start[0] * (1 - ratio) + end[0] * ratio;
        
        const offset = Math.sin(ratio * Math.PI);
        const curveX = x - offsetX * offset;
        const curveY = y + offsetY * offset;
        
        latlngs.push([curveY, curveX]);
    }
    
    latlngs.push(end);
    
    return latlngs;
}

function animateCounterUpdate(element: HTMLElement, newValue: string) {
    element.classList.add('updating');
    
    setTimeout(() => {
        element.textContent = newValue;
        element.classList.remove('updating');
    }, 300);
}

function animateTextChange(element: HTMLElement, newText: string, milestoneText?: string) {
    element.classList.add('updating');
    
    setTimeout(() => {
        if (milestoneText) {
            // Create icon element if this is a milestone text update
            const icon = getMilestoneIcon(milestoneText);
            element.innerHTML = `<i class="fas ${icon} milestone-icon"></i> ${milestoneText}`;
        } else {
            element.textContent = newText;
        }
        element.classList.remove('updating');
    }, 300);
}

slider.addEventListener('input', (event) => {
    const now = Date.now();
    const year = parseInt((event.target as HTMLInputElement).value, 10);
    updateVisualization(year);
    lastUpdateTime = now;
});

slider.addEventListener('change', (event) => {
    const year = parseInt((event.target as HTMLInputElement).value, 10);
    updateVisualization(year);
});

document.addEventListener('DOMContentLoaded', () => {
    // Add Font Awesome to the document
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesome);
    
    // Create milestone display element if it doesn't already exist
    if (!document.getElementById('milestone-container')) {
        const controlsContainer = document.querySelector('.controls-container');
        if (controlsContainer) {
            const milestoneContainer = document.createElement('div');
            milestoneContainer.id = 'milestone-container';
            milestoneContainer.className = 'milestone-container';
            
            const milestoneHeader = document.createElement('h3');
            milestoneHeader.innerHTML = '<i class="fas fa-landmark"></i> Historical Context';
            milestoneHeader.className = 'milestone-header';
            
            const milestoneText = document.createElement('p');
            milestoneText.id = 'milestone-text';
            milestoneText.className = 'milestone-text';
            
            // Add the elements to the DOM
            milestoneContainer.appendChild(milestoneHeader);
            milestoneContainer.appendChild(milestoneText);
            controlsContainer.appendChild(milestoneContainer);
            
            // Set initial milestone text with icon
            const initialYear = parseInt(slider.value, 10);
            const initialData = typedMigrationData[initialYear.toString()];
            if (initialData && initialData["Milestones"]) {
                const initialMilestone = initialData["Milestones"];
                const icon = getMilestoneIcon(initialMilestone);
                milestoneText.innerHTML = `<i class="fas ${icon} milestone-icon"></i> ${initialMilestone}`;
            }
        }
    }
});

updateVisualization(minYear);
initializeLayers();
