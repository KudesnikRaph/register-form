import React, { useState, useRef, useEffect } from 'react';
import MenuHeader from '../../components/headers/MainHeader';
import './PagePayments.css';
import filter from '../../assets/filter.png';

function Payments() {
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef(null);

  const toggleFilter = () => setShowFilter(!showFilter);

  useEffect(() => {
    const resizers = document.querySelectorAll('.resizer');
    resizers.forEach((resizer) => {
      const column = resizer.parentElement;
  
      let startX, startWidth;
  
      const onMouseDown = (e) => {
        startX = e.clientX;
        startWidth = column.offsetWidth;
  
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      };
  
      const onMouseMove = (e) => {
        const newWidth = startWidth + (e.clientX - startX);
        const minWidth = 100;
        const maxWidth = 400;
      
        if (newWidth >= minWidth && newWidth <= maxWidth) {
          column.style.width = `${newWidth}px`;
        }
      };
  
      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };
  
      resizer.addEventListener('mousedown', onMouseDown);
  
      return () => {
        resizer.removeEventListener('mousedown', onMouseDown);
      };
    });
  }, []);

  // Закрытие по клику вне попапа
  return (
    <>
      <MenuHeader />
      <div className="payments-bar">
        <div className="payments-filter">
          <button className="filter-btn" onClick={toggleFilter}>
            <img src={filter} alt="Фильтр" className="filter-icon" />
            Фильтр
          </button>

          {showFilter && (
            <div className="filter-popup" ref={filterRef}>
              <form className="filter-form">
                <div className="filter-grid">
                  <div className="filter-group">
                    <label>Сумма</label>
                    <input type="number" name="amount" />
                  </div>
                  <div className="filter-group">
                    <label>Номер счёта</label>
                    <input type="text" name="accountNumber" />
                  </div>
                  <div className="filter-group full">
                    <label>Период</label>
                    <div className="filter-period">
                      <input type="date" name="startDate" />
                      <span>—</span>
                      <input type="date" name="endDate" />
                    </div>
                  </div>
                  <div className="filter-group">
                    <label>Метод платежа</label>
                    <select name="paymentType">
                      <option value="">Метод платежа</option>
                      <option value="card">Карта</option>
                      <option value="bank">Банк</option>
                      <option value="cash">Наличные</option>
                    </select>
                  </div>
                  <div className="filter-group">
                    <label>Номер транзакции</label>
                    <input type="text" name="transactionId" />
                  </div>
                </div>

                <div className="form-buttons">
                  <button type="submit" className="apply-btn">Найти</button>
                  <button type='clear' className='clear-btn'>Очистить</button>
                </div>
              </form>
            </div>
          )}
        </div>

        <div className="payments-search">
          <input type="text" placeholder="Поиск..." className="search-input" />
        </div>
          {/* Повесить эвент на количество счетов */}
        <div className="payments-count">
            Всего: 152
        </div>

      </div>
        <div className="payments-header">
          <div className="column resizable">Номер<div className="resizer" /></div>
          <div className="column resizable">Дата<div className="resizer" /></div>
          <div className="column resizable">Метод оплаты<div className="resizer" /></div>
          <div className="column resizable">Сумма<div className="resizer" /></div>
          <div className="column resizable">Номер транзакции<div className="resizer" /></div>
        </div>
    </>
  );
}

export default Payments;
