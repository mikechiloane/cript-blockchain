import logo from './images/logo.svg';
import heroImage from './images/test.png';
import wallet from './images/wallet.png';
import security from './images/security.png';
import bitpay from './images/logo3.png';
import coinbase from './images/logo2.png';
import blockchain from './images/logo1.png';
import binance from './images/logo4.png';
import crypt from './images/crypt.png';
import logo_blue from './images/logo_blue.svg';
import logo_bluec from './images/logo_bluec.svg'
import bitcoin from './images/bitcoin.webp';
import rand from './images/rand.png';
export const resources = {
    logo,
    logo_blue,
    logo_bluec,
    rand,
    bitcoin,
    wallet,
    featureIcons: {
        security,
    },
    partners: [
        bitpay,
        coinbase,
        blockchain,
        binance
    ],
    crypton:{
        title:"Effortless Trading with Top-notch Security",
        body:"In today's fast-paced and interconnected world, trading has become an integral part of the global economy. Whether you're a seasoned investor or just starting out, finding a secure and easy way to trade is paramount. This article explores the importance of security and simplicity in trading and offers insights into achieving both.\n"
    },
    heroImage,
    crypt,
    gridSlotTitle:"We've built a platform to buy and sell bitcoins, as well as manage your wallet.",
    gridSlotSubtitle:"We're reinventing the global equity blockchain - that is secure and easy-to use platform, and completely disruping the way way business raise capital and the way investors buy and sell shares.",
    heroText: 'The Ultimate Solution for Managing Your Bitcoins',
    heroSubtitle:"Experience the future of money management. Our Bitcoin wallet is your key to financial sovereignty and success.",
    demo:{
        firstName:"Mike",
        lastName:"Chiloane",
        email:"mikechiloane@icloud.com",
        phone:"079 032 7152",
        balance:3000,
    },
     chartdata : [
        {
            date: "Jan 22",
            SemiAnalysis: 2890,
            "The Pragmatic Engineer": 2338,
        },
        {
            date: "Feb 22",
            SemiAnalysis: 2756,
            "The Pragmatic Engineer": 2103,
        },
        {
            date: "Mar 22",
            SemiAnalysis: 3322,
            "The Pragmatic Engineer": 2194,
        },
        {
            date: "Apr 22",
            SemiAnalysis: 3470,
            "The Pragmatic Engineer": 2108,
        },
        {
            date: "May 22",
            SemiAnalysis: 3475,
            "The Pragmatic Engineer": 1812,
        },
        {
            date: "Jun 22",
            SemiAnalysis: 3129,
            "The Pragmatic Engineer": 1726,
        },
    ],

   dataFormatter: (number: number) => {
        return "$ " + Intl.NumberFormat("us").format(number).toString();
    },
}