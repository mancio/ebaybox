import { Component, OnInit } from '@angular/core';
import {Item} from './list.model';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  kg: string;
  img: string;
  dim: number;

  list = Item[Item.length] = [
    new Item('Arduino Raspberry PI Red Digital Voltmeter Volt Panel Meter 7 PCS DC 0V To 100V',
      '',
      'https://www.aliexpress.com/item/10pcs-lot-0-56-inch-Digital-red-LED-Display-Voltage-Voltmeter-tester-Panel-car-motorcycle-monitors/32792957481.html',
      'http://bit.do/eTLJ8'),
    new Item('Arduino Voltage Current Meter Dual Digital Voltmeter Stock 10 PCS 0 To 100V 10A',
      '',
      'https://www.aliexpress.com/item/DC-0-100V-5A-Voltmeter-Ammeter-Red-LED-Dual-Amp-Volt-Voltage-Current-Meter-Gauge-Tester/32954281432.html',
      'https://bit.ly/2Kc6LgY'),
    new Item('USB Disk 3.5 inch external',
      '40 GB FULL OF GAMES AND SOFTWARE!',
      '',
      ''),
    new Item('Portable Handheld Gaming Console with 200 Classic Game Mini Arcade Games Retro Tiny Video Game Arcade Cabinet for Kids',
      'batteries included',
      'https://www.aliexpress.com/item/Portable-Handheld-Gaming-Console-with-200-Classic-Game-Mini-Arcade-Games-Retro-Tiny-Video-Game-Arcade/32857948053.html',
      'https://bit.ly/2VYcNEd'),
    new Item('keyboard 2.4GHz Wireless Keyboard with Touchpad Fly Air Mouse Remote Control For Android TV BOX PC',
      'with lithium battery',
      'https://www.aliexpress.com/item/i8-Keyboard-2-4GHz-Air-mouse-Wireless-Keyboard-Remote-Control-Touchpad-For-Android-TV-Box/32841990896.html',
      'https://bit.ly/2W2IBb0'),
    new Item('Bicycle Fork Stem Extender MTB Bike Handlebar Riser Head Up Adapter Aluminium Alloy Handlebar Riser 28.6mm',
      '(standard) red color',
      'https://www.aliexpress.com/item/High-Quality-Aluminium-Alloy-Bike-Bicycle-Fork-Stem-Extender-Handlebar-Riser-Head-Up-Adapter-2017-Brand/32795029602.html',
      'https://bit.ly/30V1lgb'),
    new Item('ZTTO 32 60 80 90 100mm High-Strength Lightweight 31.8mm Stem for XC AM MTB Mountain Road Bike Bicycle part)',
      '(similar, see picture)',
      'https://www.aliexpress.com/item/ZTTO-32-60-80-90-100mm-High-Strength-Lightweight-31-8mm-Stem-for-XC-AM-MTB/32829258932.html',
      'https://www.aliexpress.com/item/ZTTO-32-60-80-90-100mm-High-Strength-Lightweight-31-8mm-Stem-for-XC-AM-MTB/32829258932.html'),
    new Item('Car Mp3 Player Wireless Bluetooth S6 BT USB Charger LCD Car Kit MP3 Bluetooth FM Transmitter With Hands-Free 2018',
      '',
      'https://www.aliexpress.com/item/Car-Mp3-Player-Wireless-Bluetooth-S6-BT-USB-Charger-LCD-Car-Kit-MP3-Bluetooth-FM-Transmitter/32814253089.html',
      'https://bit.ly/2Xhx9cS'),
    new Item('4 pcs LTC1871 DC-DC Boost converter Adjustable Step-Up High Power Supply Module Red LED Voltage meter Button Switch',
      '',
      'https://www.aliexpress.com/item/5piece-lot-LTC1871-DC-DC-Boost-converter-Adjustable-Step-Up-High-Power-Supply-Module-Red-LED/1504873209.html',
      'https://bit.ly/2QBrCLD'),
    new Item('4 pcs DC 150W Boost Converter Mobile Adjustable Laptop Car Power DC-DC 10-32V Switch 12-35V Boost Module',
      '',
      'https://www.aliexpress.com/item/150W-Boost-Converter-DC-DC-10-32V-to-12-35V-Step-Up-Voltage-Charger-Module/32694673885.html',
      'https://bit.ly/2XePHdW'),
    new Item('EEPROM USB Programmer SP200S with ISP interface for 336 SCM &24&93 Series SCM',
      '',
      'https://www.aliexpress.com/item/EEPROM-USB-Programmer-SP200SE-SP200S-Enhanced-with-ISP-interface-for-336-SCM-24-93-Series-SCM/32705229123.html',
      'https://bit.ly/2wtWFQE'),
    new Item('Wireless Bluetooth VR-BOX Universal Remote Control Gamepad For iPhone Samsung Android IOS',
      '',
      'https://www.aliexpress.com/item/Wireless-Bluetooth-VR-BOX-Remote-Control-Gamepad-For-iPhone-Samsung-Android-IOS/32847262528.html',
      'https://bit.ly/2wzEBUV'),
    new Item('USB Phone battery charger 5V 2A',
      '',
      '',
      ''),
    new Item('Wacom One graphic table with pen and software',
      '',
      '',
      ''),
    new Item('Radiation-resistant old man mobile phone a111 large big ultra long standby old-age black color',
      '',
      'https://www.aliexpress.com/item/SOS-Big-Sound-Big-Buttons-Old-Man-Mobile-Cell-Phone/32393887603.html',
      'https://bit.ly/2MetlYS'),
    new Item('Nokia 3100 rh-19',
      '',
      '',
      ''),
    new Item('DC 5V Micro USB Power Supply TF Radio MP3 Decoder Board 5V Audio Module for Car Remote Music',
      '',
      'https://www.aliexpress.com/item/High-Quality-TF-Radio-MP3-Decoder-Board-5V-Audio-Module-for-Car-Remote-Music-Speaker-DC/32838931912.html',
      'https://bit.ly/2HIQZbE'),
    new Item('AC 12V 6J1 Valve Pre-amp Tube PreAmplifier Board Headphone Amplifier Buffer + case',
      '',
      'https://www.aliexpress.com/item/AC-12V-6J1-Valve-Pre-amp-Tube-PreAmplifier-Board-Headphone-Amplifier-Buffer-case/32761193378.html',
      'https://bit.ly/2Im8izY'),
    new Item('2x gaskets for Bialetti moka 6 cup model',
      '',
      'https://amzn.to/2I7QwBv',
      'https://amzn.to/2I7QwBv'),
    new Item('Alarm Clock 5 Groups Noisy Bell 12/24 Hours Countdown Multi Kitchen Home House Lab Library Laboratory Drug Timer Count down Time',
      '',
      'https://www.aliexpress.com/item/Wholesale-Alarm-Clock-5-Groups-Noisy-Bell-12-24-Hours-Countdown-Multicolor-Home-Kitchen-Supplies-LX2654/32899808307.html',
      'https://bit.ly/2IcBA58'),
    new Item('2x New LED Full Spectrum E27 60LEDs Faster Growth Lights 41 Red +19 Blue Led Grow Lamps For Flowers Plant Hydroponics Lighting',
      '',
      'https://www.aliexpress.com/item/1Pcs-New-LED-Full-Spectrum-E27-60LEDs-Faster-Growth-Lights-41-Red-19-Blue-Led-Grow/32260473322.html',
      'https://bit.ly/2U5bpPa'),
    new Item('One led light 5.5W 4000K 220-240V',
      '',
      '',
      ''),
    new Item('PM2.5 Particle Detector Haze Dust Air Quality Monitoring Analyzer Meter Sensor',
      '',
      'https://www.aliexpress.com/item/PM2-5-Particle-Detector-Haze-Dust-Air-Quality-Monitoring-Analyzer-Meter-Sensor/32850402527.html',
      'https://bit.ly/2MjfHnw'),
    new Item('Old style transformer toroidal 12V 2.8A',
      '',
      'https://www.tme.eu/en/katalog/toroidal-transformers_100028/?art=TST200W/12V-24V&page=13',
      'https://bit.ly/2wq8APe'),
    new Item('TI 89 Titanium Texas Instrument programmable calculator',
      '(batteries included)',
      'https://www.amazon.com/Texas-Instruments-Titanium-Calculator-packaging/dp/B0001EMLZ2?th=1',
      'https://amzn.to/2HMTUQR'),
    new Item('DC12V to AC 220V 500W USB Car Power Inverter Adapter',
      '',
      'https://www.aliexpress.com/item/DC12V-to-AC-220V-500W-Car-Power-Inverter-With-USB-Charger-Converter-Adapter-DC-12/32798349029.html',
      'https://bit.ly/2YVT9KS'),
    new Item('Router ASUS RT-N12 + B1',
      '',
      'https://www.asus.com/Networking/RT-N12-plus-B1',
      'https://bit.ly/2YXSqsM'),
    new Item('HDMI Cable video cables gold plated 1.4 1080P 3D Cable for HDTV',
      '',
      'https://www.aliexpress.com/item/Slim-HDMI-Cable-Gold-Plated-Connection-1080P-with-FREE-SHIPPING-0-5m-1m-1-5m-1/32467185952.html',
      'https://bit.ly/2VYtqQc'),
  ];


  constructor() { }

  ngOnInit() {
    this.kg = '6';
    this.img = 'https://cdn.shopify.com/s/files/1/2604/1662/products/mysterybox_1024x1024@2x.png?v=1514434361';
    this.dim = 150;
  }

}
