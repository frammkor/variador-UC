<script>
  import { onMount } from 'svelte';

  onMount(() => {
    if (document.querySelector('script[data-dandy-chat-widget]')) {
      return;
    }

    const browserWindow = /** @type {Window & { _support?: Record<string, unknown> }} */ (window);

    browserWindow._support = {
      account: '2a1da090-2a53-4afe-907a-252ef96e7756',
      user: {},
      ui: {
        contactMode: 'default',
        enableKb: 'true',
        mailbox: '82241100',
        styles: {
          widgetColor: '#904cac',
          gradient: true
        },
        shoutboxFacesMode: '',
        widget: {
          allowBotProcessing: 'true',
          slug: 'dandydancers',
          label: {
            text: 'Hi! 👋 Tell us when you expect to be in Buenos Aires or when you’ll need a tango dancer.',
            mode: 'notification',
            delay: 3,
            duration: 30,
            primary: 'What is Dandy Dancers?',
            primary2: 'Where will it be available?',
            primary3: 'Can I book a dancer now?',
            primary4: 'Is this a dating service?',
            secondary: '',
            sound: true
          },
          position: 'bottom-right'
        },
        overrides: {
          confirmationMessage:
            'Thanks for reaching out! We’ve received your message. To help you better, tell us when you expect to be in Buenos Aires and what kind of tango experience you’re looking for. We’ll reply as soon as we can.'
        }
      },
      apps: {
        recentConversations: {},
        faq: { enabled: true }
      }
    };

    const loader = document.createElement('script');
    loader.src = 'https://cdn.reamaze.com/assets/reamaze-loader.js';
    loader.async = true;
    loader.dataset.dandyChatWidget = 'true';
    document.head.appendChild(loader);
  });
</script>
