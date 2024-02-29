import { useCallback, useEffect, useRef, useState } from 'react';
import {
  FieldValues,
  Path,
  PathValue,
  UseFormGetValues,
  UseFormResetField,
} from 'react-hook-form';

type Params<Type extends FieldValues> = {
  getValues: UseFormGetValues<Type>;
  initialState: PathValue<Type, Path<Type>>;
  name: Path<Type>;
  resetField: UseFormResetField<Type>;
};

export const useModal = <Type extends FieldValues>(params: Params<Type>) => {
  const { getValues, initialState, resetField, name } = params;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const fieldStateRef = useRef<PathValue<Type, Path<Type>>>(initialState);

  const onOpenHandler = () => {
    setIsOpen(true);
  };

  const onApplyHandler = useCallback(() => {
    setIsOpen(false);

    const updatedFieldState = getValues(name);

    fieldStateRef.current = updatedFieldState;

    if (updatedFieldState) {
      resetField(name, { defaultValue: updatedFieldState });
    }
  }, [getValues, name, resetField]);

  const onCloseHandler = useCallback(() => {
    setIsOpen(false);

    resetField(name, { defaultValue: fieldStateRef.current });
  }, [name, resetField]);

  useEffect(() => {
    resetField(name, { defaultValue: fieldStateRef.current });
  }, [resetField, name, fieldStateRef]);

  return {
    isOpen,
    onApplyHandler,
    onCloseHandler,
    onOpenHandler,
  };
};
