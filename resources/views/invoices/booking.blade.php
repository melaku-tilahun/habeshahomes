<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Invoice {{ $invoice_number }}</title>
    <style>
        body { font-family: DejaVu Sans, Arial, sans-serif; margin: 40px; color: #333; }
        .header { border-bottom: 3px solid #c0392b; padding-bottom: 20px; margin-bottom: 30px; }
        .header h1 { color: #c0392b; margin: 0; font-size: 28px; }
        .header p { margin: 5px 0; color: #666; }
        .details { display: flex; justify-content: space-between; margin-bottom: 30px; }
        .box { width: 45%; }
        .box h3 { color: #c0392b; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th { background: #c0392b; color: white; padding: 12px; text-align: left; }
        td { padding: 12px; border-bottom: 1px solid #ddd; }
        .total-row { font-weight: bold; background: #f9f9f9; }
        .footer { margin-top: 40px; text-align: center; color: #666; font-size: 12px; }
        .status-paid { color: #27ae60; font-weight: bold; }
    </style>
</head>
<body>
    <div class="header">
        <h1>HabeshaHomes</h1>
        <p>Ethiopia's Premier Real Estate Platform</p>
        <p>Invoice #: {{ $invoice_number }} | Date: {{ $invoice_date }}</p>
    </div>

    <div class="details">
        <div class="box">
            <h3>Bill To</h3>
            <p><strong>{{ $guest->name }}</strong></p>
            <p>{{ $guest->email }}</p>
            <p>{{ $guest->phone ?? 'N/A' }}</p>
        </div>
        <div class="box">
            <h3>Property Details</h3>
            <p><strong>{{ $property->title }}</strong></p>
            <p>{{ $property->address }}</p>
            <p>{{ $property->city }}{{ $property->sub_city ? ', ' . $property->sub_city : '' }}</p>
        </div>
    </div>

    <div class="details">
        <div class="box">
            <h3>Booking Info</h3>
            <p>Booking ID: #{{ $booking->id }}</p>
            @if($booking->check_in && $booking->check_out)
            <p>Check-in: {{ $booking->check_in->format('F d, Y') }}</p>
            <p>Check-out: {{ $booking->check_out->format('F d, Y') }}</p>
            <p>Guests: {{ $booking->guest_count }}</p>
            @endif
        </div>
        <div class="box">
            <h3>Payment Status</h3>
            <p class="status-paid">PAID</p>
            @if($payment)
            <p>Method: {{ ucfirst($payment->gateway) }}</p>
            <p>Transaction: {{ $payment->gateway_reference }}</p>
            <p>Paid on: {{ $payment->paid_at?->format('F d, Y H:i') }}</p>
            @endif
        </div>
    </div>

    <table>
        <thead>
            <tr>
                <th>Description</th>
                <th>Details</th>
                <th style="text-align:right">Amount ({{ $property->currency }})</th>
            </tr>
        </thead>
        <tbody>
            @foreach($line_items as $item)
            <tr>
                <td>{{ $item['description'] }}</td>
                <td>{{ $item['details'] }}</td>
                <td style="text-align:right">{{ number_format($item['amount'], 2) }}</td>
            </tr>
            @endforeach
        </tbody>
        <tfoot>
            <tr class="total-row">
                <td colspan="2" style="text-align:right">Subtotal:</td>
                <td style="text-align:right">{{ number_format($totals['subtotal'], 2) }}</td>
            </tr>
            <tr class="total-row">
                <td colspan="2" style="text-align:right">Platform Fee:</td>
                <td style="text-align:right">{{ number_format($totals['platform_fee'], 2) }}</td>
            </tr>
            <tr class="total-row" style="font-size:16px; background:#c0392b; color:white;">
                <td colspan="2" style="text-align:right">Total:</td>
                <td style="text-align:right">{{ number_format($totals['total'], 2) }}</td>
            </tr>
        </tfoot>
    </table>

    <div class="footer">
        <p>Thank you for choosing HabeshaHomes!</p>
        <p>For support, contact support@habeshahomes.et | +251 911 00 00 00</p>
        <p>This is a computer-generated invoice and does not require a signature.</p>
    </div>
</body>
</html>
