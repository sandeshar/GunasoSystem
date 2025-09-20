# F2 Components: Carbon Component Mapping and Shared Components

## Component Inventory (11 Shared Components)

### 1. Button maps to Carbon Button
Purpose: Primary interaction element
Props: children (required), onClick, kind, disabled
States:
- Loading: disabled=true with loading text in children
- Disabled: disabled=true
- Error: kind="danger" for error actions
- Empty: N/A (buttons don't have empty state)

### 2. TextInput maps to Carbon TextInput
Purpose: Single-line text entry
Props: label (required), value, onChange, disabled, invalid, invalidText
States:
- Loading: disabled=true
- Disabled: disabled=true
- Error: invalid=true with invalidText
- Empty: Handled via validation

### 3. TextArea maps to Carbon TextArea
Purpose: Multi-line text entry
Props: label (required), value, onChange, disabled, invalid, invalidText
States:
- Loading: disabled=true
- Disabled: disabled=true
- Error: invalid=true with invalidText
- Empty: Handled via validation

### 4. DropDown maps to Carbon Dropdown
Purpose: Selection from predefined options
Props: label (required), items (required), onChange, disabled, invalid, invalidText
States:
- Loading: disabled=true with items=["Loading..."]
- Disabled: disabled=true
- Error: invalid=true with invalidText
- Empty: items=[] shows empty dropdown

### 5. FileUploader maps to Carbon FileUploaderDropContainer
Purpose: File upload with drag and drop
Props: onAddFiles, disabled
States:
- Loading: disabled=true
- Disabled: disabled=true
- Error: Handled in onAddFiles callback
- Empty: Default drop zone state

### 6. Logo (Custom Component)
Purpose: Reusable logo component for both citizen and staff systems
Props: variant ("citizen" | "staff"), customText, className, clickable, href
States:
- Citizen variant: displays "Gunaso Nepal", uses citizen-logo class
- Staff variant: displays "Staff Portal", uses staff-logo class
- Clickable: navigates to appropriate home page for variant
- Custom: allows override of text and navigation

### 7. Toast maps to Carbon Callout
Purpose: File upload with drag and drop
Props: onAddFiles, disabled
States:
- Loading: disabled=true
- Disabled: disabled=true
- Error: Handled in onAddFiles callback
- Empty: Default drop zone state

### 7. Toast maps to Carbon Callout
Purpose: Temporary notifications with auto-dismiss
Props: title (required), subtitle, kind, duration, onDismiss
States:
- Loading: kind="info" with loading message
- Disabled: N/A (toasts are temporary)
- Error: kind="error" for error notifications
- Empty: Auto-hide after duration

### 8. Modal maps to Carbon Dialog
Purpose: Modal dialogs and confirmations
Props: open (required), onClose (required), onConfirm (required), title, description, confirmLabel, cancelLabel
States:
- Loading: Show loading spinner in dialog
- Disabled: disabled state on buttons
- Error: Show error message in dialog body
- Empty: N/A (modals have content)

### 9. Filter (Custom Component)
Purpose: Filter trigger button with icon
Props: No props (minimal implementation)
States:
- Loading: N/A (static component)
- Disabled: N/A (static component)
- Error: N/A (static component)
- Empty: N/A (static component)

### 10. Table maps to Carbon DataTable
Purpose: Structured data display (moved from position 5)
Props: rows (required), headers (required), loading
States:
- Loading: loading=true shows "Loading..." message
- Disabled: N/A (minimal version)
- Error: N/A (minimal version)
- Empty: Shows "No data available" when rows.length = 0

## Carbon Design System Token Usage

### Colors
- Primary: interactive-01 (Button primary)
- Secondary: interactive-02 (Button secondary)
- Danger: support-01 (Error states, danger buttons)
- Success: support-02 (Success toasts)
- Warning: support-03 (Warning states)
- Info: support-04 (Info toasts)

### Typography
- Labels: label-01 (Input labels)
- Body: body-01 (Input text, table content)
- Helper: helper-text-01 (Helper/error text)

### Spacing
- Components: spacing-05 (Standard component spacing)
- Layout: spacing-07 (Section spacing)

## State Management Patterns

### Loading States
Button disabled={isLoading}
Table loading={isLoading} rows={data} headers={headers}

### Error States
TextInput invalid={!!errors.field} invalidText={errors.field}

### Empty States
Table rows={[]} headers={headers} // Shows "No data available"

## Component Dependencies
- React: 18.3.1
- Carbon Design System: @carbon/react
- TypeScript: Full type safety for all props

## Status: F2 COMPLETED

Deliverables:
- 10 minimal shared components scaffolded
- Carbon component mapping documented
- Loading/empty/error/disabled states implemented
- TypeScript interfaces with essential props only
- Consistent design token usage
- Minimal, focused, and production-ready components