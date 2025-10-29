import React, { useMemo, useState } from "react";
import BookingWizard from "./BookingWizard";

// Dummy vehicles data (richer than the wizard's sample)
const DUMMY_VEHICLES = [
  { id: 1, make: "Toyota", model: "Corolla", seats: 5, pricePerDay: 35, transmission: "Automatic", fuelPolicy: "Full-to-full", mileage: "Unlimited", supplier: "CityRent" },
  { id: 2, make: "Hyundai", model: "Tucson", seats: 5, pricePerDay: 55, transmission: "Automatic", fuelPolicy: "Pre-purchase", mileage: "Unlimited", supplier: "FastCar" },
  { id: 3, make: "Ford", model: "Fiesta", seats: 4, pricePerDay: 30, transmission: "Manual", fuelPolicy: "Full-to-full", mileage: "Limited", supplier: "CityRent" },
  { id: 4, make: "Mercedes", model: "Vito", seats: 8, pricePerDay: 90, transmission: "Automatic", fuelPolicy: "Full-to-full", mileage: "Unlimited", supplier: "PremiumAuto" },
  { id: 5, make: "Renault", model: "Clio", seats: 5, pricePerDay: 28, transmission: "Manual", fuelPolicy: "Full-to-full", mileage: "Limited", supplier: "BudgetRide" }
];

const unique = (arr, key) => [...new Set(arr.map(x => x[key]))];

const SearchCompare = () => {
  const [pickup, setPickup] = useState('City Center');
  const [start, setStart] = useState(new Date().toISOString().slice(0,10));
  const [end, setEnd] = useState(new Date(Date.now() + 1000*60*60*24).toISOString().slice(0,10));
  const [age, setAge] = useState(30);

  // Filters
  const [seatsFilter, setSeatsFilter] = useState('Any');
  const [transmissionFilter, setTransmissionFilter] = useState('Any');
  const [fuelPolicyFilter, setFuelPolicyFilter] = useState('Any');
  const [mileageFilter, setMileageFilter] = useState('Any');
  const [supplierFilter, setSupplierFilter] = useState('Any');
  const [priceMax, setPriceMax] = useState(100);
  const [sortAsc, setSortAsc] = useState(true);

  const [showWizard, setShowWizard] = useState(false);
  const [wizardVehicle, setWizardVehicle] = useState(null);

  const results = useMemo(() => {
    let r = DUMMY_VEHICLES.slice();
    if (seatsFilter !== 'Any') r = r.filter(v => v.seats === Number(seatsFilter));
    if (transmissionFilter !== 'Any') r = r.filter(v => v.transmission === transmissionFilter);
    if (fuelPolicyFilter !== 'Any') r = r.filter(v => v.fuelPolicy === fuelPolicyFilter);
    if (mileageFilter !== 'Any') r = r.filter(v => v.mileage === mileageFilter);
    if (supplierFilter !== 'Any') r = r.filter(v => v.supplier === supplierFilter);
    r = r.filter(v => v.pricePerDay <= priceMax);
    r.sort((a,b) => sortAsc ? a.pricePerDay - b.pricePerDay : b.pricePerDay - a.pricePerDay);
    return r;
  }, [seatsFilter, transmissionFilter, fuelPolicyFilter, mileageFilter, supplierFilter, priceMax, sortAsc]);

  const searchPayload = { pickup, start, end, age };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Search & Compare (Demo)</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input className="p-2 border rounded" value={pickup} onChange={e => setPickup(e.target.value)} placeholder="Pickup location" />
        <input type="date" className="p-2 border rounded" value={start} onChange={e => setStart(e.target.value)} />
        <input type="date" className="p-2 border rounded" value={end} onChange={e => setEnd(e.target.value)} />
      </div>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
        <div>
          <label className="text-sm">Driver age</label>
          <input type="number" className="p-2 border rounded w-full" value={age} onChange={e => setAge(Number(e.target.value))} min={18} />
        </div>

        <div>
          <label className="text-sm">Seats</label>
          <select className="p-2 border rounded w-full" value={seatsFilter} onChange={e => setSeatsFilter(e.target.value)}>
            <option>Any</option>
            {[2,4,5,7,8].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div>
          <label className="text-sm">Transmission</label>
          <select className="p-2 border rounded w-full" value={transmissionFilter} onChange={e => setTransmissionFilter(e.target.value)}>
            <option>Any</option>
            {unique(DUMMY_VEHICLES, 'transmission').map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div>
          <label className="text-sm">Fuel policy</label>
          <select className="p-2 border rounded w-full" value={fuelPolicyFilter} onChange={e => setFuelPolicyFilter(e.target.value)}>
            <option>Any</option>
            {unique(DUMMY_VEHICLES, 'fuelPolicy').map(f => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <label className="text-sm">Mileage</label>
          <select className="p-2 border rounded w-full" value={mileageFilter} onChange={e => setMileageFilter(e.target.value)}>
            <option>Any</option>
            {unique(DUMMY_VEHICLES, 'mileage').map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        <div>
          <label className="text-sm">Supplier</label>
          <select className="p-2 border rounded w-full" value={supplierFilter} onChange={e => setSupplierFilter(e.target.value)}>
            <option>Any</option>
            {unique(DUMMY_VEHICLES, 'supplier').map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div>
          <label className="text-sm">Max price per day (${priceMax})</label>
          <input type="range" min={10} max={200} value={priceMax} onChange={e => setPriceMax(Number(e.target.value))} />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm text-gray-600">{results.length} results</div>
        <div className="flex items-center gap-3">
          <label className="text-sm">Sort by price</label>
          <button className="px-3 py-1 border rounded" onClick={() => setSortAsc(s => !s)}>{sortAsc ? 'Asc' : 'Desc'}</button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        {results.map(v => (
          <div key={v.id} className="p-3 border rounded flex justify-between items-center">
            <div>
              <div className="font-medium">{v.make} {v.model}</div>
              <div className="text-sm text-gray-600">{v.seats} seats • {v.transmission} • {v.fuelPolicy}</div>
              <div className="text-sm text-gray-700 mt-2">Supplier: {v.supplier}</div>
            </div>
            <div className="text-right">
              <div className="font-semibold">${v.pricePerDay}/day</div>
              <div className="mt-2 flex flex-col">
                <button className="px-3 py-1 bg-blue-600 text-white rounded mb-2" onClick={() => { setWizardVehicle(v); setShowWizard(true); }}>Book demo</button>
                <button className="px-3 py-1 border rounded" onClick={() => alert('Open details (demo)')}>View details</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showWizard && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Booking (pre-filled)</h3>
            <button className="px-3 py-1 border rounded" onClick={() => setShowWizard(false)}>Close</button>
          </div>
          <BookingWizard initialVehicle={wizardVehicle} initialSearch={searchPayload} />
        </div>
      )}
    </div>
  );
};

export default SearchCompare;
