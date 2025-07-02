import { useDirection } from "@/components/DirectionProvider";

export const LanguageSwitcher = () => {
  const { dir, setDir } = useDirection();

  const toggleDirection = () => {
    setDir(dir === 'ltr' ? 'rtl' : 'ltr');
  };

  return (
    <button onClick={toggleDirection}>
      {dir === 'ltr' ? 'Switch to RTL' : 'Switch to LTR'}
    </button>
  );
};