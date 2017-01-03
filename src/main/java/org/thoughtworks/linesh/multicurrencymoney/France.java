package org.thoughtworks.linesh.multicurrencymoney;

// duplicated code of Dollar class and France class
public class France extends Money {
    public France(int amount) {
        super(amount);
    }

    public France times(int multiplier) {
        return new France(this.amount * multiplier);
    }

    // TODO: [Linesh][1/2/17] Implement equality check with null object
    // TODO: [Linesh][1/2/17] Implement equality check with different object type
    @Override
    public boolean equals(Object object) {
        Money france = (Money) object;
        return france.getAmount() == this.getAmount();
    }

    // TODO: [Linesh][1/2/17] Implement hashCode() method
}