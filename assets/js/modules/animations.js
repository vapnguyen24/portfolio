window.initAnimations = function () {
    if (typeof gsap === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    // ── 1. Hero Entrance Timeline ─────────────────────────────────────
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTl
        .fromTo('#navbar',
            { y: -70, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
        )
        .fromTo('.hero-avatar',
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.9, ease: 'back.out(1.2)' },
            0.2
        )
        .fromTo('#hero-text-content > *',
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.12 },
            0.35
        )
        .fromTo('#scroll-indicator',
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, clearProps: 'transform' },
            1.2
        );

    // Avatar gentle float loop (starts after entrance completes)
    gsap.to('.hero-avatar', {
        y: -10, duration: 2.8, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.8
    });

    // ── 2. About Section ──────────────────────────────────────────────
    ScrollTrigger.create({
        trigger: '#about .text-center.mb-16',
        start: 'top 80%',
        once: true,
        onEnter() {
            gsap.fromTo('#about .text-center.mb-16',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
            );
        }
    });

    ScrollTrigger.create({
        trigger: '#about .grid.gap-8',
        start: 'top 75%',
        once: true,
        onEnter() {
            gsap.fromTo('#about .grid.gap-8 > div',
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
            );
        }
    });

    // Stats counter
    document.querySelectorAll('#about .text-3xl.font-bold').forEach(el => {
        const raw = el.textContent.trim();
        const value = parseInt(raw);
        const suffix = raw.replace(/\d/g, '');
        if (isNaN(value)) return;
        ScrollTrigger.create({
            trigger: el.closest('div'),
            start: 'top 85%',
            once: true,
            onEnter() {
                const obj = { n: 0 };
                gsap.to(obj, {
                    n: value,
                    duration: 1.5,
                    ease: 'power2.out',
                    onUpdate() { el.textContent = Math.round(obj.n) + suffix; }
                });
            }
        });
    });

    // ── 3. Skills Section Heading ─────────────────────────────────────
    ScrollTrigger.create({
        trigger: '#skills .text-center.mb-16',
        start: 'top 80%',
        once: true,
        onEnter() {
            gsap.fromTo('#skills .text-center.mb-16',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
            );
        }
    });

    // ── 4. Projects Section Heading ───────────────────────────────────
    ScrollTrigger.create({
        trigger: '#projects .text-center.mb-16',
        start: 'top 80%',
        once: true,
        onEnter() {
            gsap.fromTo('#projects .text-center.mb-16',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
            );
        }
    });

    // ── 5. Dynamic renders (called from ui.js after render) ───────────
    window.animateSkills = function () {
        const el = document.getElementById('skills-list');
        if (!el) return;

        // Kill any existing ScrollTriggers for this element to avoid accumulation
        ScrollTrigger.getAll().filter(st => st.trigger === el).forEach(st => st.kill());

        // Already visible → just show without animation (e.g. language switch)
        if (el.getBoundingClientRect().top < window.innerHeight * 0.82) {
            gsap.set('#skills-list .group', { clearProps: 'all' });
            return;
        }

        gsap.from('#skills-list .group', {
            y: 30, opacity: 0, scale: 0.9, duration: 0.5,
            stagger: { amount: 0.7 },
            ease: 'back.out(1.4)',
            scrollTrigger: { trigger: el, start: 'top 82%', once: true }
        });
    };

    window.animateProjects = function () {
        const el = document.getElementById('projects-list');
        if (!el) return;

        // Kill any existing ScrollTriggers for this element to avoid accumulation
        ScrollTrigger.getAll().filter(st => st.trigger === el).forEach(st => st.kill());

        // Already visible → just show without animation (e.g. language switch)
        if (el.getBoundingClientRect().top < window.innerHeight * 0.82) {
            gsap.set('#projects-list > div', { clearProps: 'all' });
            return;
        }

        gsap.from('#projects-list > div', {
            y: 50, opacity: 0, duration: 0.6,
            stagger: { amount: 0.5 },
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 82%', once: true }
        });
    };
};
