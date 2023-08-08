import React from 'react';
import { Link } from 'react-router-dom';

export function PageNotFound () {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
       <span>404</span> - Страница не найдена
      </h3>
      <Link className="button button_type_to-main" to="/">Вернуться на главную</Link>
    </div>
  )
}

