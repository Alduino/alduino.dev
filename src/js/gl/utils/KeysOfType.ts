type KeysOfType<TSource, TType> = {
    [Key in keyof TSource]: TSource[Key] extends TType ? Key : never;
}[keyof TSource];

export default KeysOfType;
