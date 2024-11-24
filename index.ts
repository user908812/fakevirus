class Notif {
    private readonly message: string;
    private readonly desc: string;
    private readonly icon: string;
    private readonly image: string;
    public getNotification?: Notification;
    constructor(message: string, desc: string, icon: string, image: string, getNotification?: Notification) {
        this.message = message;
        this.desc = desc;
        this.icon = icon;
        this.image = image;
        this.getNotification = getNotification;
    }
    send(): void {
        Notification.requestPermission().then(perm => {
            if (perm === 'granted') {
                this.getNotification = new Notification(this.message, {
                    body: this.desc,
                    icon: this.icon,
                    requireInteraction: true,
                    dir: "rtl",
                    image: this.image
                })
            } else if (perm === 'denied') {
                alert('PLEASE TURN ON NOTIFICATIONS.');
            }
        })
    }
}

function createNotification(msg: string, desc: string, icon: string, image: string): void {
    const n = new Notif(msg, desc, icon, image);
    n.send();

    n.getNotification?.addEventListener('click', (e: Event) => e.preventDefault());

    setTimeout((): void => n.getNotification?.close(), 3000);
}

setInterval((): void => {
    createNotification('Warning: Your computer is compromised!', `Your system has been infected by a malicious virus. Immediate action is required to prevent further data loss. Click here to run the security scan and fix the issue. Failure to respond within 10 minutes may result in severe data corruption. Do not turn off your computer.`, 'warning-icon.png', 'virus1.png');
    createNotification('ALERT: Suspicious Activity Detected!', `Our security system has detected unusual activity on your computer. Your personal data may be at risk. Click 'Fix Now' to protect your files and remove the threat. Warning: Ignoring this message could lead to the irreversible loss of your files.`, 'warning-icon2.png', 'virus2.png');
    createNotification('Critical Error: Your PC is infected!', `VIRUS ALERT: A dangerous Trojan has been detected on your system. All files are at risk. To prevent further damage, click 'OK' to start the automatic cleanup process. If you do not act within 5 minutes, your system will shut down automatically.`, 'warning-icon.png', 'virus3.png');
    createNotification('Your Device is at Risk of Data Loss', `A severe security breach has been identified on your device. Personal information may have been exposed. Please click 'Fix Now' to run a scan and secure your data. Failure to take action within 15 minutes will result in your system locking up and requiring a reset.`, 'warning-icon.png', 'virus4.png');
    createNotification('Security Breach: Your Files Are In Danger!', `Attention: Malware has been detected on your device. All files may be compromised. Please click the link below to begin the security check and prevent further damage. Don't ignore this warning – data corruption is imminent.`, 'warning-icon2.png', 'virus5.png');
    createNotification('Warning: Your Computer is Under Attack!', `Immediate action required! Your computer is under a malware attack that could steal personal information. Click 'Resolve Now' to initiate the virus scan and remove the threat. Your device will shut down soon if you do not resolve this issue.`, 'warning-icon.png', 'virus6.png');
}, 4000);