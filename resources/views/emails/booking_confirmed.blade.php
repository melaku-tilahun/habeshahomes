<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmed</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #b91c1c, #991b1b); color: #ffffff; padding: 32px 24px; text-align: center; }
        .header h1 { margin: 0 0 8px; font-size: 26px; letter-spacing: -0.5px; }
        .header p { margin: 0; opacity: 0.9; font-size: 15px; }
        .content { padding: 32px 24px; }
        .card { background: #f1f5f9; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .card h3 { margin-top: 0; color: #0f172a; font-size: 17px; }
        .detail-row { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 14px; }
        .label { color: #64748b; }
        .val { font-weight: 600; color: #0f172a; }
        .total-box { border-top: 2px dashed #cbd5e1; margin-top: 16px; padding-top: 14px; display: flex; justify-content: space-between; font-size: 18px; font-weight: 700; color: #0f172a; }
        .footer { text-align: center; padding: 24px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
        .btn { display: inline-block; background-color: #b91c1c; color: #ffffff !important; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-weight: 600; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>HabeshaHomes</h1>
            <p>Booking Confirmed — Thank You!</p>
        </div>
        <div class="content">
            <p>Hello <strong>{{ $guest->name }}</strong>,</p>
            <p>Your booking has been successfully confirmed. A copy of your official invoice is attached to this email.</p>

            <div class="card">
                <h3>{{ $property->title }}</h3>
                <div class="detail-row">
                    <span class="label">Location:</span>
                    <span class="val">{{ $property->address }}, {{ $property->city }}</span>
                </div>
                @if($booking->check_in && $booking->check_out)
                <div class="detail-row">
                    <span class="label">Check-in:</span>
                    <span class="val">{{ $booking->check_in->format('F d, Y') }}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Check-out:</span>
                    <span class="val">{{ $booking->check_out->format('F d, Y') }}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Guests:</span>
                    <span class="val">{{ $booking->guest_count }}</span>
                </div>
                @endif
                <div class="detail-row">
                    <span class="label">Booking Reference:</span>
                    <span class="val">#{{ $booking->id }}</span>
                </div>
                <div class="total-box">
                    <span>Total Paid:</span>
                    <span>{{ number_format($booking->total_amount, 2) }} {{ $property->currency }}</span>
                </div>
            </div>

            <p style="text-align: center;">
                <a href="{{ config('app.url') }}/bookings/{{ $booking->id }}" class="btn">View Booking Details</a>
            </p>
        </div>
        <div class="footer">
            <p>&copy; {{ date('Y') }} HabeshaHomes. Ethiopia's Premier Real Estate Platform.</p>
        </div>
    </div>
</body>
</html>
