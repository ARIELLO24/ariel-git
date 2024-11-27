
import * as QRCode from 'qrcode';

// Função para gerar o QR Code
function generateQRCode(data: string): void {
    QRCode.toFile('qrcode.png', data, (err: any) => {
        if (err) {
            console.error('Erro ao gerar QR Code:', err);
        } else {
            console.log('QR Code gerado: qrcode.png');
        }
    });
}


generateQRCode('https://www.youtube.com/watch?v=lkNPCsjMBGQ');
