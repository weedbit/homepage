interface Window {
    mdc: {
        autoInit: () => void;
    };
    translations: {
        [key: string]: {
            [key: string]: string;
        };
    };
} 