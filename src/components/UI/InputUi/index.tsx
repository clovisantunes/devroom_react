import { ChangeEvent } from 'react';
import styles from './styles.module.scss';

interface InputProps {
    inputMode?: 'tel';
    id: string;
    type: string;
    name: string;
    placeholder: string;
    label?: string;
    value?: string;
    labelName?: string;
    read?: boolean;
    mouse?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputUi({ id, name, placeholder, type, label, value,labelName, onChange, inputMode, read,mouse }: InputProps) {
    return (
        <div className={styles.inputButton}>
            <label htmlFor={label}>{labelName}</label>
            <input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                required={true}
                value={value}
                inputMode={inputMode}
                readOnly={read}
                style= {{cursor: mouse}}
            />
        </div>
    );
}
