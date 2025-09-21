// jest-dom adds custom jest matchers for asserting on DOM nodes.
import '@testing-library/jest-dom';

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeInTheDocument(): R;
            toHaveClass(className: string): R;
            toBeDisabled(): R;
            toBeChecked(): R;
            toHaveAttribute(attr: string, value?: string): R;
            toHaveStyle(style: string | Record<string, any>): R;
        }
    }
}