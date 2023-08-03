import { PopupWithForm } from "./PopupWithForm";

export function ConfirmPopup({ isOpen, onClose, onDelete,  selectedCard, isLoading }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onDelete(selectedCard);
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      name="confirm"
      title="Вы уверены?"
      buttonName="Да"
      isLoadingText="Удаление..."
    ></PopupWithForm>
  );
}
