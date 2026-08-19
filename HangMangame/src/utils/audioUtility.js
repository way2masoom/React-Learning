// Web Audio API Synthesizer for Game Sound Effects & Ambient Background Music

class SoundManager {
    constructor() {
        this.ctx = null;
        this.isMuted = localStorage.getItem('hangman_muted') === 'true';
        this.isBgmActive = localStorage.getItem('hangman_bgm') !== 'false'; // default to true
        this.bgmInterval = null;
        this.bgmStep = 0;
        this.masterBgmGain = null;
    }

    initContext() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        localStorage.setItem('hangman_muted', this.isMuted ? 'true' : 'false');
        if (this.isMuted) {
            this.stopBgm();
        } else if (this.isBgmActive) {
            this.startBgm();
        }
        return this.isMuted;
    }

    toggleBgm() {
        this.isBgmActive = !this.isBgmActive;
        localStorage.setItem('hangman_bgm', this.isBgmActive ? 'true' : 'false');
        if (this.isBgmActive && !this.isMuted) {
            this.startBgm();
        } else {
            this.stopBgm();
        }
        return this.isBgmActive;
    }

    playTone(freq, type = 'sine', duration = 0.1, gainValue = 0.15) {
        if (this.isMuted) return;
        try {
            this.initContext();
            if (!this.ctx) return;

            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

            gain.gain.setValueAtTime(gainValue, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start();
            osc.stop(this.ctx.currentTime + duration);
        } catch (e) {
            console.warn('Audio play error:', e);
        }
    }

    // Key click / tap sound
    playClick() {
        this.playTone(480, 'sine', 0.06, 0.08);
    }

    // Correct letter guess sound (bright chime)
    playCorrect() {
        if (this.isMuted) return;
        try {
            this.initContext();
            if (!this.ctx) return;

            const now = this.ctx.currentTime;
            [523.25, 659.25, 783.99].forEach((freq, i) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now + i * 0.07);
                gain.gain.setValueAtTime(0.12, now + i * 0.07);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.07 + 0.18);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now + i * 0.07);
                osc.stop(now + i * 0.07 + 0.18);
            });
        } catch (e) {
            console.warn('Audio play error:', e);
        }
    }

    // Wrong letter guess sound (low buzz/thud)
    playWrong() {
        if (this.isMuted) return;
        try {
            this.initContext();
            if (!this.ctx) return;

            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(180, now);
            osc.frequency.exponentialRampToValueAtTime(90, now + 0.25);

            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.25);
        } catch (e) {
            console.warn('Audio play error:', e);
        }
    }

    // Victory celebration fanfare
    playWin() {
        if (this.isMuted) return;
        try {
            this.initContext();
            if (!this.ctx) return;

            const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
            const now = this.ctx.currentTime;
            notes.forEach((freq, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const start = now + idx * 0.12;
                const dur = idx === notes.length - 1 ? 0.6 : 0.25;

                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, start);

                gain.gain.setValueAtTime(0.18, start);
                gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(start);
                osc.stop(start + dur);
            });
        } catch (e) {
            console.warn('Audio play error:', e);
        }
    }

    // Defeat / Game Over sound
    playLose() {
        if (this.isMuted) return;
        try {
            this.initContext();
            if (!this.ctx) return;

            const notes = [392.00, 369.99, 349.23, 311.13]; // G4, F#4, F4, Eb4
            const now = this.ctx.currentTime;
            notes.forEach((freq, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const start = now + idx * 0.16;
                const dur = 0.35;

                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(freq, start);

                gain.gain.setValueAtTime(0.16, start);
                gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(start);
                osc.stop(start + dur);
            });
        } catch (e) {
            console.warn('Audio play error:', e);
        }
    }

    // Soft, relaxing retro ambient music synthesizer
    startBgm() {
        if (this.isMuted || !this.isBgmActive) return;
        if (this.bgmInterval) return; // already playing

        this.initContext();
        if (!this.ctx) return;

        // Pentatonic / Lo-fi Chill chord arpeggios: Cmaj7, Am7, Fmaj7, Gsus4
        const melody = [
            // Cmaj7 (C4, E4, G4, B4, C5)
            261.63, 329.63, 392.00, 493.88, 523.25, 392.00, 329.63, 261.63,
            // Am7 (A3, C4, E4, G4, A4)
            220.00, 261.63, 329.63, 392.00, 440.00, 392.00, 329.63, 261.63,
            // Fmaj7 (F3, A3, C4, E4, F4)
            174.61, 220.00, 261.63, 329.63, 349.23, 329.63, 261.63, 220.00,
            // Gsus4 -> G (G3, C4, D4, G4, B3)
            196.00, 261.63, 293.66, 392.00, 293.66, 261.63, 246.94, 196.00
        ];

        const bassline = [
            130.81, 130.81, 130.81, 130.81, // C3
            110.00, 110.00, 110.00, 110.00, // A2
            87.31,  87.31,  87.31,  87.31,  // F2
            98.00,  98.00,  98.00,  98.00   // G2
        ];

        this.bgmStep = 0;

        this.bgmInterval = setInterval(() => {
            if (this.isMuted || !this.isBgmActive || !this.ctx) return;
            try {
                const now = this.ctx.currentTime;
                const noteFreq = melody[this.bgmStep % melody.length];
                
                // Melody note (soft sine with lowpass)
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const filter = this.ctx.createBiquadFilter();

                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(650, now);

                osc.type = 'sine';
                osc.frequency.setValueAtTime(noteFreq, now);

                // Very gentle ambient volume
                gain.gain.setValueAtTime(0.035, now);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.32);

                osc.connect(filter);
                filter.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(now);
                osc.stop(now + 0.35);

                // Play soft warm bass note on every 4th step
                if (this.bgmStep % 4 === 0) {
                    const bassIdx = Math.floor(this.bgmStep / 2) % bassline.length;
                    const bassFreq = bassline[bassIdx];
                    const bassOsc = this.ctx.createOscillator();
                    const bassGain = this.ctx.createGain();
                    const bassFilter = this.ctx.createBiquadFilter();

                    bassFilter.type = 'lowpass';
                    bassFilter.frequency.setValueAtTime(300, now);

                    bassOsc.type = 'triangle';
                    bassOsc.frequency.setValueAtTime(bassFreq, now);

                    bassGain.gain.setValueAtTime(0.045, now);
                    bassGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

                    bassOsc.connect(bassFilter);
                    bassFilter.connect(bassGain);
                    bassGain.connect(this.ctx.destination);

                    bassOsc.start(now);
                    bassOsc.stop(now + 0.95);
                }

                this.bgmStep++;
            } catch (e) {
                console.warn('BGM error:', e);
            }
        }, 280); // ~107 BPM gentle pulse
    }

    stopBgm() {
        if (this.bgmInterval) {
            clearInterval(this.bgmInterval);
            this.bgmInterval = null;
        }
    }
}

export const sounds = new SoundManager();
