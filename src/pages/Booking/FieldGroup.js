const FieldGroup = ({ children, field, className }) => {
    return (
        <div className={className ? 'field-group h-full' : 'field-group'}>
            {children}
            {field.dirty && field.error ? (
                <p className='error' data-testid="error-message">{field.message}</p>
            ) : null}               
        </div>
    );
};

export default FieldGroup;