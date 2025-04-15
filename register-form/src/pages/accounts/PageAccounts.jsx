import React, { useState, useEffect } from 'react';
import './PageAccounts.css';
import MenuHeader from '../../components/MainHeader';

function Accounts() {
    const [accounts, setAccounts] = useState([
        {
            id: '1f6fbc27-6ea8-407f-a90a-09a08d076720',
            name: 'ООО Веселые старты',
            status: 'Активен',
            balance: '10 000 ₽',
            currency: 'руб',
            accountNumber: '1f6fbc27-6ea8-407f-a90a-09a08d076720',
            periodFrom: '01.01.2024',
            periodTo: '24.04.2024',
            notes: 'Some notes',
            services: ['Интернет', 'Телефония', 'Хостинг']
        },
        {
            id: 'test-acct',
            name: 'ООО Веселые старты',
            status: 'Не активен',
            balance: '5 000 ₽',
            currency: 'руб',
            accountNumber: 'test счет',
            periodFrom: '01.01.2024',
            periodTo: '12.04.2025',
            notes: 'Test notes',
            services: ['Техподдержка', 'Облачное хранилище']
        },
        {
            id: 'eb8d2c12-03c2-486f-9545-ad33d27415f5',
            name: 'ООО Веселые старты',
            status: 'Активен',
            balance: '7 500 ₽',
            currency: 'руб',
            accountNumber: 'eb8d2c12-03c2-486f-9545-ad33d27415f5',
            periodFrom: '01.01.2024',
            periodTo: '30.04.2024',
            notes: 'More notes',
            services: ['Виртуальный сервер', 'Техподдержка 24/7']
        },
        {
            id: 'courier-acct',
            name: 'Test Testerovich',
            status: 'Активен',
            balance: '2 500 ₽',
            currency: 'руб',
            accountNumber: 'Счет Курьера',
            periodFrom: '01.01.2024',
            periodTo: '15.04.2024',
            notes: 'Courier notes',
            services: ['Доставка', 'Логистика', 'GPS-мониторинг']
        },
    ]);
    
    const [companies] = useState([...new Set(accounts.map(account => account.company))]);
    
    const [selectedCompany, setSelectedCompany] = useState('');
    const [filteredAccounts, setFilteredAccounts] = useState(accounts);
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        let results = accounts;
        
        if (selectedCompany) {
            results = results.filter(account => account.company === selectedCompany);
        }
        
        if (searchQuery) {
            results = results.filter(account =>
                account.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                account.accountNumber.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        
        setFilteredAccounts(results);
    }, [selectedCompany, accounts, searchQuery]);

    const handleAccountClick = (account) => {
        setSelectedAccount(account);
    };

    const closeModal = () => {
        setSelectedAccount(null);
    };
    
    return (
        <>
        <MenuHeader />
        <div className="accounts-page">
            

            <div className="search-section">
                <div className="search-container">
                    <div className="search-fields">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Поиск по номеру или названию"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <select
                            value={selectedCompany}
                            onChange={(e) => setSelectedCompany(e.target.value)}
                            className="company-select"
                        >
                            <option value="">Все компании</option>
                            {companies.map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        className="reset-button"
                        onClick={() => {
                            setSelectedCompany('');
                            setSearchQuery('');
                        }}
                    >
                        Сбросить
                    </button>
                </div>
            </div>
            
            <div className="accounts-container">
                {filteredAccounts.map(account => (
                    <div className="account-card" key={account.id}>
                        <h2 className="account-name">{account.name}</h2>
                        <p className="account-period">Период действия до: {account.periodTo}</p>
                        <p className="account-balance">Баланс: {account.balance}</p>
                        <button className="details-button" onClick={() => handleAccountClick(account)}>Подробнее</button>
                    </div>
                ))}
            </div>
            
            {selectedAccount && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Дополнительная информация</h3>
                            <button className="close-button" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <p><b>Статус:</b> {selectedAccount.status}</p>
                            <p><b>Номер счёта:</b> {selectedAccount.accountNumber}</p>
                            <p><b>Примечания:</b> {selectedAccount.notes}</p>
                            <p><b>Услуги:</b></p>
                            <ul>
                                {selectedAccount.services.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
    );
}

export default Accounts;
