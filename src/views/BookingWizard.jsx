import React, { useState, useMemo, useEffect } from "react";

// Simple booking wizard with dummy data implementing the 10-step flow.
const daysBetween = (start, end) => {
  try {
    const s = new Date(start);
    const e = new Date(end);
    const ms = e - s;
    if (Number.isNaN(ms) || ms <= 0) return 1;
    return Math.ceil(ms / (1000 * 60 * 60 * 24));
  } catch (e) {
    return 1;
  }
};

const DUMMY_VEHICLES = [
  { id: 1, make: "Toyota", model: "Corolla", seats: 5, pricePerDay: 35, image: "" },
  { id: 2, make: "Hyundai", model: "Tucson", seats: 5, pricePerDay: 55, image: "" },
  { id: 3, make: "Ford", model: "Transit", seats: 8, pricePerDay: 75, image: "" }
];

const extrasList = [
  { key: "gps", label: "GPS", price: 5 },
  { key: "childSeat", label: "Child seat", price: 7 },
  { key: "additionalDriver", label: "Additional driver", price: 8 }
];

const BookingWizard = ({ initialVehicle = null, initialSearch = null }) => {
  const [step, setStep] = useState(0);
  const [search, setSearch] = useState(initialSearch || { pickup: "City Center", dropoff: "City Center", start: new Date().toISOString().slice(0, 10), end: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString().slice(0, 10) });
  const [selectedVehicle, setSelectedVehicle] = useState(initialVehicle);
  const [extras, setExtras] = useState({});
  const [insurance, setInsurance] = useState({ type: "basic", costPerDay: 10 });
  const [payment, setPayment] = useState({ name: "", card: "", paid: false });
  const [bookingId, setBookingId] = useState(null);
  const [pickupChecks, setPickupChecks] = useState({ photosTaken: false, fuelChecked: false, mileageChecked: false });
  const [returnChecks, setReturnChecks] = useState({ cleaned: false, fuelChecked: false, damageFree: false });

  const days = useMemo(() => daysBetween(search.start, search.end), [search.start, search.end]);

  const available = DUMMY_VEHICLES.filter(v => true); // placeholder for filters

  const extrasTotal = Object.keys(extras).reduce((sum, k) => (extras[k] ? sum + (extrasList.find(e => e.key === k)?.price || 0) : sum), 0);

  const vehiclePrice = selectedVehicle ? selectedVehicle.pricePerDay * days : 0;
  const insuranceTotal = insurance ? insurance.costPerDay * days : 0;
  const total = vehiclePrice + insuranceTotal + extrasTotal * days;

  const next = () => setStep(s => Math.min(s + 1, 8));
  const prev = () => setStep(s => Math.max(s - 1, 0));

  const confirmBooking = () => {
    // create a dummy booking id
    const id = `CH-${Math.random().toString(36).slice(2, 9).toUpperCase()}`;
    setBookingId(id);
    setPayment(p => ({ ...p, paid: true }));
    setStep(6); // move to pickup checklist
  };

  // If props change externally, update internal state
  useEffect(() => {
    if (initialSearch) setSearch(initialSearch);
  }, [initialSearch]);

  useEffect(() => {
    if (initialVehicle) setSelectedVehicle(initialVehicle);
  }, [initialVehicle]);

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h3 className="text-xl font-bold mb-3">Quick Booking Wizard (Demo)</h3>
      <div className="mb-4 text-sm text-gray-600">Step {step + 1} of 8</div>

      {step === 0 && (
        <div>
          <h4 className="font-semibold">1. Search</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
            <input className="p-2 border rounded" value={search.pickup} onChange={e => setSearch({ ...search, pickup: e.target.value })} />
            <input className="p-2 border rounded" value={search.dropoff} onChange={e => setSearch({ ...search, dropoff: e.target.value })} />
            <div className="flex gap-2">
              <input type="date" className="p-2 border rounded" value={search.start} onChange={e => setSearch({ ...search, start: e.target.value })} />
              <input type="date" className="p-2 border rounded" value={search.end} onChange={e => setSearch({ ...search, end: e.target.value })} />
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={next}>Search</button>
            <button className="px-4 py-2 border rounded" onClick={() => { setSearch({ pickup: "City Center", dropoff: "City Center", start: new Date().toISOString().slice(0, 10), end: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString().slice(0, 10) }); }}>Reset</button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <h4 className="font-semibold">2. Select a vehicle</h4>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
            {available.map(v => (
              <div key={v.id} className={`p-3 border rounded ${selectedVehicle?.id === v.id ? 'ring-2 ring-blue-400' : ''}`}>
                <div className="font-semibold">{v.make} {v.model}</div>
                <div className="text-sm text-gray-600">Seats: {v.seats}</div>
                <div className="mt-2">${v.pricePerDay}/day</div>
                <div className="mt-3 flex gap-2">
                  <button className="px-3 py-1 bg-green-600 text-white rounded" onClick={() => setSelectedVehicle(v)}>Select</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h4 className="font-semibold">3. Extras</h4>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2">
            {extrasList.map(ex => (
              <label key={ex.key} className="flex items-center gap-2 p-2 border rounded">
                <input type="checkbox" checked={!!extras[ex.key]} onChange={e => setExtras(prev => ({ ...prev, [ex.key]: e.target.checked }))} />
                <div className="flex-1">
                  <div className="font-medium">{ex.label}</div>
                  <div className="text-sm text-gray-500">${ex.price}/day</div>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h4 className="font-semibold">4. Insurance</h4>
          <div className="mt-2 flex gap-3">
            <label className={`p-3 border rounded ${insurance.type === 'basic' ? 'ring-2 ring-blue-300' : ''}`}>
              <input type="radio" name="ins" checked={insurance.type === 'basic'} onChange={() => setInsurance({ type: 'basic', costPerDay: 10 })} /> Basic (${10}/day)
            </label>
            <label className={`p-3 border rounded ${insurance.type === 'full' ? 'ring-2 ring-blue-300' : ''}`}>
              <input type="radio" name="ins" checked={insurance.type === 'full'} onChange={() => setInsurance({ type: 'full', costPerDay: 20 })} /> Full (${20}/day)
            </label>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h4 className="font-semibold">5. Payment</h4>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
            <input className="p-2 border rounded" placeholder="Cardholder name" value={payment.name} onChange={e => setPayment(p => ({ ...p, name: e.target.value }))} />
            <input className="p-2 border rounded" placeholder="Card number (demo)" value={payment.card} onChange={e => setPayment(p => ({ ...p, card: e.target.value }))} />
          </div>
          <div className="mt-3 text-sm text-gray-700">Total estimate: <span className="font-semibold">${total.toFixed(2)}</span></div>
        </div>
      )}

      {step === 5 && (
        <div>
          <h4 className="font-semibold">6. Review & Confirm</h4>
          <div className="mt-2 p-3 border rounded bg-gray-50">
            <div><strong>Vehicle:</strong> {selectedVehicle ? `${selectedVehicle.make} ${selectedVehicle.model}` : '—'}</div>
            <div><strong>Dates:</strong> {search.start} → {search.end} ({days} days)</div>
            <div><strong>Pickup:</strong> {search.pickup} — <strong>Dropoff:</strong> {search.dropoff}</div>
            <div><strong>Extras:</strong> {Object.keys(extras).filter(k => extras[k]).join(', ') || 'None'}</div>
            <div><strong>Insurance:</strong> {insurance.type} (${insurance.costPerDay}/day)</div>
            <div className="mt-2"><strong>Estimated total:</strong> ${total.toFixed(2)}</div>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={confirmBooking} disabled={!selectedVehicle || !payment.name}>Confirm & Pay</button>
            <button className="px-4 py-2 border rounded" onClick={prev}>Back</button>
          </div>
          {!selectedVehicle && <div className="mt-2 text-red-500">Please select a vehicle before confirming.</div>}
        </div>
      )}

      {step === 6 && (
        <div>
          <h4 className="font-semibold">7. Pickup checklist</h4>
          <div className="mt-2 grid gap-2">
            <label className="flex items-center gap-2"><input type="checkbox" checked={pickupChecks.photosTaken} onChange={e => setPickupChecks(p => ({ ...p, photosTaken: e.target.checked }))} /> Take timestamped photos of exterior & interior</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={pickupChecks.fuelChecked} onChange={e => setPickupChecks(p => ({ ...p, fuelChecked: e.target.checked }))} /> Verify fuel level</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={pickupChecks.mileageChecked} onChange={e => setPickupChecks(p => ({ ...p, mileageChecked: e.target.checked }))} /> Note odometer reading</label>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => setStep(7)} disabled={!(pickupChecks.photosTaken && pickupChecks.fuelChecked)}>Continue to Return Checklist</button>
            <button className="px-4 py-2 border rounded" onClick={prev}>Back</button>
          </div>
        </div>
      )}

      {step === 7 && (
        <div>
          <h4 className="font-semibold">8. Return checklist</h4>
          <div className="mt-2 grid gap-2">
            <label className="flex items-center gap-2"><input type="checkbox" checked={returnChecks.cleaned} onChange={e => setReturnChecks(r => ({ ...r, cleaned: e.target.checked }))} /> Clean interior</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={returnChecks.fuelChecked} onChange={e => setReturnChecks(r => ({ ...r, fuelChecked: e.target.checked }))} /> Return with agreed fuel level</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={returnChecks.damageFree} onChange={e => setReturnChecks(r => ({ ...r, damageFree: e.target.checked }))} /> Confirm no new damage</label>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={() => setStep(8)} disabled={!(returnChecks.fuelChecked)}>Finish & Receipt</button>
            <button className="px-4 py-2 border rounded" onClick={prev}>Back</button>
          </div>
        </div>
      )}

      {step === 8 && (
        <div>
          <h4 className="font-semibold">9. Receipt</h4>
          <div className="mt-2 p-3 border rounded bg-gray-50">
            <div><strong>Booking ID:</strong> {bookingId}</div>
            <div><strong>Vehicle:</strong> {selectedVehicle ? `${selectedVehicle.make} ${selectedVehicle.model}` : '—'}</div>
            <div><strong>Dates:</strong> {search.start} → {search.end} ({days} days)</div>
            <div><strong>Total paid:</strong> ${total.toFixed(2)}</div>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => { alert('Demo booking complete — no real payment was processed.'); setStep(0); setSelectedVehicle(null); setExtras({}); setPayment({ name: '', card: '', paid: false }); setBookingId(null); }}>Done</button>
          </div>
        </div>
      )}

      {/* Navigation footer */}
      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">Estimate: <strong>${total.toFixed(2)}</strong></div>
        <div className="flex gap-2">
          {step > 0 && step < 5 && <button className="px-3 py-1 border rounded" onClick={prev}>Back</button>}
          {step < 5 && <button className="px-3 py-1 bg-blue-500 text-white rounded" onClick={next}>Next</button>}
        </div>
      </div>
    </div>
  );
};

export default BookingWizard;
