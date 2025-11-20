// Using native fetch in Node.js 18+

async function testBookingAPI() {
    const bookingData = {
        destinationId: 'everest-base-camp-trek',
        destinationName: 'Everest Base Camp Trek',
        customerName: 'API Test User',
        email: 'api@test.com',
        phone: '9876543210',
        date: '2025-05-01',
        guests: 3,
        message: 'Testing via script'
    };

    try {
        console.log('1. Creating Booking...');
        const createRes = await fetch('http://localhost:3000/api/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData)
        });

        if (!createRes.ok) {
            throw new Error(`Create failed: ${createRes.status} ${createRes.statusText}`);
        }

        const createdBooking = await createRes.json();
        console.log('Booking Created:', createdBooking.id);

        console.log('2. Verifying in Admin List...');
        const listRes = await fetch('http://localhost:3000/api/bookings');
        const bookings = await listRes.json();

        const found = bookings.find(b => b.id === createdBooking.id);
        if (found) {
            console.log('✅ Booking verification successful!');
            console.log('Found booking:', found);
        } else {
            console.error('❌ Booking not found in list!');
        }

    } catch (error) {
        console.error('Test failed:', error);
    }
}

testBookingAPI();
