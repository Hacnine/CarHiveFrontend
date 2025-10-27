import React from 'react';
import { useGetUserBookingsQuery, useConfirmBookingMutation, useCancelBookingMutation } from '../../app/services/bookingsApi.js';
import PrimaryButton from '../../components/PrimaryButton';

export default function MyBookings() {
  const { data, error, isLoading } = useGetUserBookingsQuery();
  const [confirmBooking, confirmState] = useConfirmBookingMutation();
  const [cancelBooking, cancelState] = useCancelBookingMutation();

  const handleConfirm = async (bookingId) => {
    try {
      await confirmBooking({ bookingId }).unwrap();
      alert('Booking confirmed');
    } catch (e) {
      console.error(e);
      alert('Error confirming');
    }
  };

  const handleCancel = async (bookingId) => {
    try {
      await cancelBooking({ id: bookingId }).unwrap();
      alert('Booking cancelled');
    } catch (e) {
      console.error(e);
      alert('Error cancelling');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">Failed to load bookings</div>;

  const items = data?.data || [];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">My Bookings</h2>
      {items.length === 0 && <div>No bookings yet</div>}
      <div className="grid gap-4">
        {items.map((b) => (
          <div key={b.id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <div className="font-semibold">{b.vehicleId}</div>
              <div className="text-sm text-gray-600">{b.status} - {new Date(b.startDate).toLocaleString()} → {new Date(b.endDate).toLocaleString()}</div>
            </div>
            <div className="space-x-2">
              {b.status === 'pending_hold' && (
                <PrimaryButton buttonName="Confirm" className="bg-green-600" onClick={() => handleConfirm(b.id)} />
              )}
              <PrimaryButton buttonName="Cancel" className="bg-red-600" onClick={() => handleCancel(b.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
